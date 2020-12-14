const downloadImage = function(imgFileName, callback) {
  console.log(`Downloading ${imgFileName}`);
  setTimeout(() => {
    console.log(`Successfully downoladed ${imgFileName}`)
    callback(imgFileName);
  }, 3000);

  console.log('Does this still the work');
}

const useImageData = function(imageName) {
  console.log(`Printing ${imageName}.`);
};


 downloadImage('myFamily.png', useImageData);