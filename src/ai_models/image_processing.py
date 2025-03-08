import cv2
import numpy as np
from PIL import Image

def enhance_image(image_path):
    # Load the image using OpenCV
    img = cv2.imread(image_path)
    # Apply enhancement (simple brightness/contrast adjustment)
    enhanced = cv2.convertScaleAbs(img, alpha=1.2, beta=30)
    
    # Convert from BGR (OpenCV default) to RGB (for use with PIL)
    enhanced_rgb = cv2.cvtColor(enhanced, cv2.COLOR_BGR2RGB)
    
    # Convert to a PIL Image
    pil_img = Image.fromarray(enhanced_rgb)
    
    return pil_img