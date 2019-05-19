import sklearn.cluster, PIL.Image, numpy, sys
import shutil, os
# import matplotlib.pyplot as plt

def split(fn, thresh=200):
    print("testing")
    img = PIL.Image.open(fn)
    dat = numpy.array(img.convert(mode='L'))
    h, w = dat.shape
    dat = dat.mean(axis=0)
    # plt.plot(dat*(dat>thresh);

    path, fname = os.path.split(fn)
    fname = os.path.basename(fn)
    base, ext = os.path.splitext(fname)

    # guesses = numpy.matrix(numpy.linspace(0, len(dat), 5)).T
    # km = sklearn.cluster.KMeans(n_clusters=5, init=guesses, n_init=1, max_iter=100)
    # km.fit(numpy.matrix(numpy.nonzero(dat>thresh)).T)
    # c1, c2, c3, c4 = map(int, km.cluster_centers_[[0,1,2,3]])

    pad = (len(dat)/5)

    print(path,fname)
    img.crop((0, 0, pad*1, h)).save(path + './' + base + '_1' + ext)
    img.crop((pad*1, 0, pad*2, h)).save(path + './' + base + '_2' + ext)
    img.crop((pad*2, 0, pad*3, h)).save(path + './' + base + '_3' + ext)
    img.crop((pad*3, 0, pad*4, h)).save(path + './' + base + '_4' + ext)
    img.crop((pad*4, 0, w, h)).save(path + './' + base + '_5' + ext)

#     print(path,fname)
#    # f.close()
#     os.remove(fn)
#     os.remove("download.png")   
#     os.remove("85021.png")
#     if os.path.exists("demofile.txt"):
#         os.remove("demofile.txt")
#     else:
#         print("The file does not exist")

    # source = "./"
    # destination = "./IndivDigits"
    # for f in os.listdir(source):
    #     if f.endswith(".png"):
    #         print(os.path.join(source, f)
    #         shutil.move(os.path.join(source, f), os.path.join(destination, f))

if __name__ == "__main__":
    split(sys.argv[1])

print("path,fname")