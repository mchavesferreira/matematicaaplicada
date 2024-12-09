import cv2

# URL do stream RTSP
rtsp_url = 'rtsp://admin:kjbm@192.168.15.22:554/cam/realmonitor?channel=6&subtype=0'

# Cria o objeto VideoCapture
cap = cv2.VideoCapture(rtsp_url)

# Verifica se a conexão foi estabelecida
if not cap.isOpened():
    print("Não foi possível abrir o stream RTSP.")
    exit()

# Loop para ler e exibir os frames
while True:
    ret, frame = cap.read()
    if not ret:
        print("Falha ao capturar frame. Encerrando...")
        break
    cv2.imshow('Stream RTSP', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Libera os recursos
cap.release()
cv2.destroyAllWindows()
