function downloadImage() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
  
    // Recorremos cada pixel de la imagen
    for (var i = 0; i < data.length; i += 4) {
      // Si el pixel es casi blanco (valores de luminosidad cercanos a 255), lo hacemos transparente
      if (data[i] > 240 && data[i + 1] > 240 && data[i + 2] > 240) {
        data[i + 3] = 0;
      }
    }
  
    // Actualizamos la imagen con los nuevos datos de transparencia
    ctx.putImageData(imageData, 0, 0);
  
    // Generamos la data URI de la imagen
    var dataURI = canvas.toDataURL("image/png");
  
    // Creamos un enlace para descargar la imagen
    var link = document.createElement("a");
    link.download = "QR.png";
    link.href = dataURI;
    link.click();
  }
  