const JsBarcode = require("jsbarcode");
const { createCanvas } = require("canvas");

class NodeBarcodeGenerator {
  constructor() {
    this.canvas = createCanvas();
  }

  barcodeToBuffer(data) {
    JsBarcode(this.canvas, data);
    const buffer = this.canvas.toBuffer("image/png");
    // require("fs").writeFileSync(`./${data}.png`, buffer);
    return buffer;
  }
}

module.exports = new NodeBarcodeGenerator();
