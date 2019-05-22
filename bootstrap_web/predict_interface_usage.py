import predict_interface
import numpy as np
import sys, os

"""
How to use the predict_interface -interface
"""

def predict(image):
	retVals = []
	# image = sys.argv[1]
	image = image
	train = False #if len(sys.argv) == 2 else sys.argv[2]
	# train = False if len(sys.argv) == 2 else sys.argv[1]
	#print(train)

	ret_vals = predict_interface.pred_from_img(image, train)

	print(" ")
	print("----------")


	bp = ''
	X =[]
	Y = []
	
	for i in range(0, len(ret_vals)):
		# print("Prediction: " + str(ret_vals[i].get_prediction()) + ", Probability: " + str(ret_vals[i].get_probability()))
		# print("Location in image: x(" + str(ret_vals[i].get_location()[1]) + "), y(" + str(ret_vals[i].get_location()[0]) + ")")
		# print("Top left corner (shifted image): x(" + str(ret_vals[i].get_top_left()[1]) + "), y(" + str(ret_vals[i].get_top_left()[0]) + ")")
		# print("Bottom right corner (shifted image): x(" + str(ret_vals[i].get_bottom_right()[1]) + "), y(" + str(ret_vals[i].get_bottom_right()[0]) + ")")
		# print("Actual width and height (cropped image): w(" + str(ret_vals[i].get_actual_w_h()[1]) + "), h(" + str(ret_vals[i].get_actual_w_h()[0]) + ")")
		# print(" ")
		# print("----------")
		X.append(str(ret_vals[i].get_prediction()))
		Y.append(ret_vals[i].get_location()[0])
		bp= bp + str(ret_vals[i].get_prediction())

	print(X)
	print(Y)

    
	sortedPred = [x for _,x in sorted(zip(Y,X))]
	print(sortedPred)
	# sortedPred = [str(i) for i in sortedPred]
	finPred = "".join(sortedPred)

	print(f"the value being returned is {finPred}")

	print(bp)
	os.remove("./img/zip.png")
	return finPred	

# print("A modified image with the predictions: pro-img/IMAGE_NAME_digitized_image.png")

if __name__ == "__main__":
    predict(sys.argv[1])

