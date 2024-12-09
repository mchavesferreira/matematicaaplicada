import cv2
import numpy as np

# Configuração para o RTSP
rtsp_url = 'rtsp://admin:kjbm@192.168.15.22:554/cam/realmonitor?channel=1&subtype=0'
cap = cv2.VideoCapture(rtsp_url)

# Variáveis de controle
contador = 0
liberado = False

# Pontos da faixa
p1 = (200, 200)  # Ponto inicial
p2 = (450, 250)  # Ponto final
largura_faixa = 30  # Largura da faixa em pixels

while True:
    ret, frame = cap.read()
    if not ret:
        print("Falha ao capturar o frame. Verifique a conexão RTSP.")
        break

    # Redimensiona para facilitar o processamento
    frame = cv2.resize(frame, (800, 600))

    # Converte para escala de cinza
    img_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Threshold adaptativo
    img_th = cv2.adaptiveThreshold(img_gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                    cv2.THRESH_BINARY_INV, 11, 12)

    # Dilatação para destacar as áreas brancas
    kernel = np.ones((8, 8), np.uint8)
    img_dil = cv2.dilate(img_th, kernel, iterations=2)

    # Criar a máscara para a faixa inclinada
    vetor = np.array([p2[0] - p1[0], p2[1] - p1[1]])  # Vetor entre p1 e p2
    perp_vetor = np.array([-vetor[1], vetor[0]])  # Vetor perpendicular
    perp_vetor = perp_vetor / np.linalg.norm(perp_vetor) * largura_faixa // 2

    # Define os quatro pontos da faixa inclinada
    faixa_pts = np.array([
        [p1[0] + perp_vetor[0], p1[1] + perp_vetor[1]],
        [p2[0] + perp_vetor[0], p2[1] + perp_vetor[1]],
        [p2[0] - perp_vetor[0], p2[1] - perp_vetor[1]],
        [p1[0] - perp_vetor[0], p1[1] - perp_vetor[1]]
    ], dtype=np.int32)

    # Cria a máscara
    mask = np.zeros_like(img_dil)
    cv2.fillPoly(mask, [faixa_pts], 255)

    # Aplica a máscara à imagem dilatada
    faixa = cv2.bitwise_and(img_dil, mask)

    # Contagem de pixels brancos na faixa
    brancos = cv2.countNonZero(faixa)

    # Incremento do contador com base nos pixels brancos
    if brancos > 3000 and liberado:
        contador += 1
        liberado = False
    elif brancos < 3000:
        liberado = True
    else:
        liberado = False

    # Adiciona retângulos e textos para visualização
    cv2.polylines(frame, [faixa_pts], isClosed=True, color=(0, 255, 0), thickness=2)  # Verde para faixa
    cv2.putText(frame, f"Brancos: {brancos}", (p1[0] - 30, p1[1] - 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
    cv2.putText(frame, f"Contador: {contador}", (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2)

    # Exibe os frames processados
    cv2.imshow("Faixa Processada", faixa)
    cv2.imshow("Frame Original", frame)
    cv2.imshow("Threshold", cv2.resize(img_th, (600, 500)))  # Exibição da imagem binarizada redimensionada

    # Sai do loop ao pressionar 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Libera os recursos
cap.release()
cv2.destroyAllWindows()
