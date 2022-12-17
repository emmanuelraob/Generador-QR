function generateQR() {
    var text = document.getElementById("text").value;
    var canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, text);
  }
  