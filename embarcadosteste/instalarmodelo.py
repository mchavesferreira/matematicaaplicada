qfrom ultralytics import YOLO

# Carregar o modelo YOLOv8n pré-treinado
model = YOLO('yolov8n.pt')

# Exportar o modelo para o formato NCNN
model.export(format='ncnn')
