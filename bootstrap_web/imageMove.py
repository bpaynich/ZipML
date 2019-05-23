import shutil, os, sys

def moveImage(fn):
    #getting the current directory into a variable so that we can move back at the end of the process
    old_dir = os.getcwd()
    print(old_dir)

    #Moving to where the image should go and saving the current working dir
    os.chdir("./img")
    dest = os.getcwd()
    print(dest)

    #moving to where the image is downloaded. Will need adjustment here to accomodate local structure
    os.chdir("../../../../Downloads")
    source = os.getcwd()

    #move command
    shutil.move(f"{source}/{fn}", dest)
    print("File moved")

    #switching back to the original dir
    os.chdir(old_dir)

if __name__ == "__main__":
    moveImage(sys.argv[1])