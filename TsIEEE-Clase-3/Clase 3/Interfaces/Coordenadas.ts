import { PolinomicaCoordenadas } from "../Funciones/Polinomica";
import { TrigonometricaCoordenadas } from "../Funciones/Trigonometrica";

export default class Coordenadas {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  evaluarSin() {
    return new TrigonometricaCoordenadas(1).evaluar(this);
  }

  evaluarPoli() {
    return new PolinomicaCoordenadas([0, 0, 1]).evaluar(this);
  }
}
