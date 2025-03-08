from flask import Flask, request, render_template, send_file
from werkzeug.utils import secure_filename
import os
from ai_models.image_processing import enhance_image

app = Flask(__name__)

# Set up upload folder
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

# Function to check valid file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/')
def index():
    return render_template('index.html')  # Home page with upload form

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return "No file part"
    file = request.files['file']
    if file.filename == '':
        return "No selected file"
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # Apply the AI enhancement
        enhanced_img = enhance_image(file_path)
        
        # Save the enhanced image
        output_path = os.path.join(app.config['UPLOAD_FOLDER'], f"enhanced_{filename}")
        enhanced_img.save(output_path)
        
        # Return the enhanced image
        return render_template('result.html', image_path=output_path)

if __name__ == '__main__':
    app.run(debug=True)