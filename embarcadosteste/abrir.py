import cv2
import os

if os.path.exists('./lenna.jpg'):
    imagem = cv2.imread('./lenna.jpg')
else:
    print("Arquivo não encontrado.")


imagem = cv2.imread('./lenna.jpg')

cv2.imshow('Tela', imagem)
cv2.waitKey(0)
cv2.destroyAllWindows()
