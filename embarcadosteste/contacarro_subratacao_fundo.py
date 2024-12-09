import cv2
import numpy as np

# Configuração para o RTSP
rtsp_url = 'rtsp://admin:kjbm@192.168.15.22:554/cam/realmonitor?channel=6&subtype=0'
cap = cv2.VideoCapture(rtsp_url)

# Variáveis de controle
contador = 0
liberado = False

# Pontos e largura da faixa
p1 = (200, 200)  # Ponto inicial da faixa
p2 = (450, 250)  # Ponto final da faixa
largura_faixa = 30  # Largura da faixa (em pixels)

# Inicialização do subtrator de fundo
back_sub = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=50, detectShadows=True)

while True:
    ret, frame = cap.read()
    if not ret:
        print("Falha ao capturar o frame. Verifique a conexão RTSP.")
        break

    # Redimensionar frame para facilitar o processamento
    frame = cv2.resize(frame, (800, 600))

    # Aplicar subtração de fundo
    fg_mask = back_sub.apply(frame)

    # Limpar ruídos na máscara
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)
    fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_CLOSE, kernel)

    # Encontrar contornos na máscara
    contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Definir faixa ajustada
    faixa_top = min(p1[1], p2[1]) - largura_faixa // 2
    faixa_bottom = max(p1[1], p2[1]) + largura_faixa // 2
    faixa_left = min(p1[0], p2[0]) - largura_faixa // 2
    faixa_right = max(p1[0], p2[0]) + largura_faixa // 2

    # Desenhar a faixa no vídeo
    cv2.rectangle(frame, (faixa_left, faixa_top), (faixa_right, faixa_bottom), (255, 0, 0), 2)

    for contour in contours:
        if cv2.contourArea(contour) > 500:  # Ignorar pequenos ruídos
            x, y, w, h = cv2.boundingRect(contour)
            cx, cy = x + w // 2, y + h // 2  # Centro do contorno

            # Verificar se o centro do objeto está dentro da faixa
            if faixa_left <= cx <= faixa_right and faixa_top <= cy <= faixa_bottom:
                if not liberado:
                    contador += 1
                    liberado = True
                cv2.putText(frame, "Objeto detectado", (10, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
            else:
                liberado = False

    # Exibir contador na tela
    cv2.putText(frame, f'Contagem: {contador}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 255), 2)

    # Mostrar vídeo e máscara de primeiro plano
    cv2.imshow('Video', frame)
    cv2.imshow('Foreground Mask', fg_mask)

    # Sai do loop ao pressionar 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
