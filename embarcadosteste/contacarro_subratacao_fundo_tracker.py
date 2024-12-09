import cv2
import numpy as np

# Configuração do RTSP
#rtsp_url = 'rtsp://admin:kjbm@192.168.15.22:554/cam/realmonitor?channel=6&subtype=0'
rtsp_url = 'rtsp://admin:kjbm@192.168.15.22:554/cam/realmonitor?channel=1&subtype=0'


cap = cv2.VideoCapture(rtsp_url)

# Variáveis de controle
contador = 0
objetos = {}  # Dicionário para armazenar objetos rastreados
proximo_id = 1  # ID único para cada objeto
limite_desaparecimento = 20  # Máximo de quadros sem detecção antes de apagar o ID

# Pontos e largura da faixa
p1 = (200, 200)
p2 = (450, 250)
largura_faixa = 30

# Inicialização do subtrator de fundo
back_sub = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=50, detectShadows=True)

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

    faixa_top = min(p1[1], p2[1]) - largura_faixa // 2
    faixa_bottom = max(p1[1], p2[1]) + largura_faixa // 2
    faixa_left = min(p1[0], p2[0]) - largura_faixa // 2
    faixa_right = max(p1[0], p2[0]) + largura_faixa // 2

    cv2.rectangle(frame, (faixa_left, faixa_top), (faixa_right, faixa_bottom), (255, 0, 0), 2)

    # Atualizar rastreamento
    novos_objetos = {}
    for contour in contours:
        if cv2.contourArea(contour) > 500:
            x, y, w, h = cv2.boundingRect(contour)
            cx, cy = x + w // 2, y + h // 2

            if faixa_left <= cx <= faixa_right and faixa_top <= cy <= faixa_bottom:
                # Atribuir ID ao novo objeto
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

    # Atualizar desaparecimento
    for obj_id, dados in objetos.items():
        cx, cy, desaparecido = dados
        if obj_id not in novos_objetos:
            desaparecido += 1
            if desaparecido < limite_desaparecimento:
                novos_objetos[obj_id] = (cx, cy, desaparecido)

    objetos = novos_objetos

    # Exibir contador
    cv2.putText(frame, f'Contagem: {contador}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2)

    # Mostrar vídeo e máscara de primeiro plano
    cv2.imshow('Video', frame)
    cv2.imshow('Foreground Mask', fg_mask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
