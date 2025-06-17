import Coordenadas from "../Interfaces/Coordenadas";
import IFuncion from "../Interfaces/IFuncion";
import IFuncionGenerica from "../Interfaces/IFuncionGenerica";

export enum FuncionesTrigonometricas {
  Sin,
  Cos,
  Tan,
}
export default class Trigonometrica implements IFuncion {
  private funcionTrigonometrica: FuncionesTrigonometricas;
  constructor(funcionTrigonometrica: FuncionesTrigonometricas) {
    this.funcionTrigonometrica = funcionTrigonometrica;
  }
  evaluar(x: number): number {
    switch (this.funcionTrigonometrica) {
      case FuncionesTrigonometricas.Sin:
        return Math.sin(x);
      case FuncionesTrigonometricas.Cos:
        return Math.cos(x);
      case FuncionesTrigonometricas.Tan:
        return Math.tan(x);
    }
  }
}

export class TrigonometricaArreglos
  implements IFuncionGenerica<number[], number[]>
{
  private funcionTrigonometrica: FuncionesTrigonometricas;
  constructor(funcionTrigonometrica: FuncionesTrigonometricas) {
    this.funcionTrigonometrica = funcionTrigonometrica;
  }

  evaluar(x: number[]): number[] {
    switch (this.funcionTrigonometrica) {
      case FuncionesTrigonometricas.Sin:
        return x.map(Math.sin);
      case FuncionesTrigonometricas.Cos:
        return x.map(Math.cos);
      case FuncionesTrigonometricas.Tan:
        return x.map(Math.tan);
    }
  }
}

export class TrigonometricaCoordenadas
  implements IFuncionGenerica<Coordenadas, Coordenadas>
{
  private funcionTrigonometrica: FuncionesTrigonometricas;
  constructor(funcionTrigonometrica: FuncionesTrigonometricas) {
    this.funcionTrigonometrica = funcionTrigonometrica;
  }

  evaluar(value: Coordenadas): Coordenadas {
    switch (this.funcionTrigonometrica) {
      case FuncionesTrigonometricas.Sin:
        return new Coordenadas(
          Math.sin(value.x),
          Math.sin(value.y),
          Math.sin(value.z),
        );

      case FuncionesTrigonometricas.Cos:
        return new Coordenadas(
          Math.cos(value.x),
          Math.cos(value.y),
          Math.cos(value.z),
        );
      case FuncionesTrigonometricas.Tan:
        return new Coordenadas(
          Math.tan(value.x),
          Math.tan(value.y),
          Math.tan(value.z),
        );
    }
  }
}
