import cv2
import numpy as np
import time
import paho.mqtt.client as mqtt

# Configuração do RTSP
rtsp_url = 'rtsp://admin:kjbm@179.156.112.73:554/cam/realmonitor?channel=1&subtype=0'
cap = cv2.VideoCapture(rtsp_url)

# Configuração do MQTT
broker = 'broker.emqx.io'  # Substitua pelo endereço do seu broker
port = 1883               # Porta padrão MQTT
topic = 'carros/velocidade'
username = 'rpiotlora'    # Nome de usuário para o broker MQTT
password = 'rp234aA42c'   # Senha para o broker MQTT
client = mqtt.Client()

# Configurar credenciais de usuário e senha
client.username_pw_set(username, password)

# Conectar ao broker MQTT
try:
    client.connect(broker, port, 60)
    print("Conectado ao broker MQTT.")
except Exception as e:
    print(f"Erro ao conectar ao broker MQTT: {e}")
    exit()

# Variáveis de controle
contador = 0
objetos = {}  # Dicionário para armazenar objetos rastreados
proximo_id = 1  # ID único para cada objeto
limite_desaparecimento = 20  # Máximo de quadros sem detecção antes de apagar o ID
velocidades = {}  # Dicionário para armazenar as velocidades dos carros

# Pontos e largura da faixa
p1 = (200, 100)
p2 = (450, 350)
largura_faixa = 50
distancia_faixas = 5.0  # Distância entre as faixas em metros

# Coordenadas das faixas
faixa1_y = min(p1[1], p2[1]) - largura_faixa // 2
faixa2_y = max(p1[1], p2[1]) + largura_faixa // 2

# Inicialização do subtrator de fundo
back_sub = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=50, detectShadows=True)

# Controle de tempo
tempos = {}  # Armazena o tempo em que os objetos cruzam cada faixa

while True:
    ret, frame = cap.read()
    if not ret:
        print("Falha ao capturar o frame. Verifique a conexão RTSP.")
        break

    frame = cv2.resize(frame, (800, 600))
    fg_mask = back_sub.apply(frame)

    # Limpar ruídos na máscara
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)
    fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel)

    contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    faixa_top = faixa1_y
    faixa_bottom = faixa2_y

    cv2.line(frame, (0, faixa1_y), (800, faixa1_y), (255, 0, 0), 2)
    cv2.line(frame, (0, faixa2_y), (800, faixa2_y), (0, 255, 0), 2)

    # Atualizar rastreamento
    novos_objetos = {}
    for contour in contours:
        if cv2.contourArea(contour) > 500:
            x, y, w, h = cv2.boundingRect(contour)
            cx, cy = x + w // 2, y + h // 2

            id_atribuido = None
            for obj_id, dados in objetos.items():
                obj_cx, obj_cy, desaparecido = dados
                if abs(cx - obj_cx) < 50 and abs(cy - obj_cy) < 50:
                    id_atribuido = obj_id
                    break

            if id_atribuido is None:
                id_atribuido = proximo_id
                proximo_id += 1
                contador += 1  # Contar novo objeto

            novos_objetos[id_atribuido] = (cx, cy, 0)
            cv2.putText(frame, f"ID: {id_atribuido}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            # Medir tempo de cruzamento
            if faixa_top <= cy <= faixa_top + largura_faixa:
                if id_atribuido not in tempos:
                    tempos[id_atribuido] = [time.time()]  # Tempo de cruzamento da faixa 1
                elif len(tempos[id_atribuido]) == 1:
                    tempos[id_atribuido].append(time.time())  # Tempo de cruzamento da faixa 2
                    t1, t2 = tempos[id_atribuido]
                    delta_t = t2 - t1
                    if delta_t > 0:
                        velocidade = (distancia_faixas / delta_t) * 3.6  # Velocidade em km/h
                        velocidades[id_atribuido] = velocidade

                        # Enviar ID e velocidade ao broker MQTT
                        mensagem = {"ID": id_atribuido, "velocidade": velocidade}
                        client.publish(topic, str(mensagem))
                        print(f"Publicado no MQTT: {mensagem}")

    # Atualizar desaparecimento
    for obj_id, dados in objetos.items():
        cx, cy, desaparecido = dados
        if obj_id not in novos_objetos:
            desaparecido += 1
            if desaparecido < limite_desaparecimento:
                novos_objetos[obj_id] = (cx, cy, desaparecido)

    objetos = novos_objetos

    # Exibir contador e velocidades
    cv2.putText(frame, f'Contagem: {contador}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2)
    for obj_id, velocidade in velocidades.items():
        cx, cy, _ = objetos.get(obj_id, (0, 0, 0))
        cv2.putText(frame, f'{velocidade:.2f} km/h', (cx, cy), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)

    # Mostrar vídeo e máscara de primeiro plano
    cv2.imshow('Video', frame)
    cv2.imshow('Foreground Mask', fg_mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
