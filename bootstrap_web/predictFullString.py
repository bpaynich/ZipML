from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing import image
import matplotlib.pyplot as plt
import sys


def newDigProc(filepath):   
    model = load_model("mnist_trained.h5")
    filepath = filepath
    
    from tensorflow.keras.preprocessing import image
    image_size = (28, 28)
    im = image.load_img(filepath, target_size=image_size, color_mode="grayscale")
    from tensorflow.keras.preprocessing.image import img_to_array
    image = img_to_array(im)
    image.shape
    
    # Scale the image pixels by 255 (or use a scaler from sklearn here)
    image /= 255

    # Flatten into a 1x28*28 array 
    img = image.flatten().reshape(-1, 28*28)
    img.shape
#    plt.imshow(img.reshape(28, 28), cmap=plt.cm.Greys)
    # Invert the pixel values to match the original data
    img = 1 - img
#    plt.imshow(img.reshape(28, 28), cmap=plt.cm.Greys)
    # Make predictions
    return model.predict_classes(img)

def predict(directory) :
    import os
#    directory = './IndivDigits/'
    bp = ''

    # import shutil, os
    # source = "./"
    # destination = directory
    # for f in os.listdir(source):
    #     if not os.path.exists(destination):
    #         os.makedirs(destination)
    #     if f.endswith("png"):
    #         shutil.move(source, destination)

    for filename in os.listdir(directory):
        if filename.endswith(".png"):   
            fullpath = directory+filename
            bp= bp + str(newDigProc(fullpath)[0])
    print(bp)
    return bp

if __name__ == "__main__":
    predict(sys.argv[1])
    
