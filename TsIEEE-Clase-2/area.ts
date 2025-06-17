interface IRectangulo {
  ancho: number;
  alto: number;
}

class CRectangulo implements IRectangulo {
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }
}

function getArea(rect: IRectangulo): number {
  return rect.ancho * rect.alto;
}


