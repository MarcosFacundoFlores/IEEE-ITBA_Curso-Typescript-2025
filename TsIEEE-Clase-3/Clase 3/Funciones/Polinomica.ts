import Coordenadas from "../Interfaces/Coordenadas";
import IFuncion from "../Interfaces/IFuncion";
import IFuncionGenerica from "../Interfaces/IFuncionGenerica";

export class Polinomica implements IFuncion {
  private pol: number[]; // pol[n-1]*x^n + … + pol[1]*x + pol[0]
  constructor(pol: number[]) {
    this.pol = pol;
  }
  evaluar(x: number): number {
    let res = 0;
    for (let i = 0; i < this.pol.length; i++) {
      res += Math.pow(x, i) * this.pol[i];
    }
    return res;
  }
}

export class PolinomicaArreglos
  implements IFuncionGenerica<number[], number[]>
{
  private pol: number[];

  constructor(pol: number[]) {
    this.pol = pol;
  }

  evaluar(x: number[]): number[] {
    let res = new Array();

    res = x.map((value: number) => {
      let aux = 0;
      for (let i = 0; i < this.pol.length; i++) {
        aux += Math.pow(value, i) * this.pol[i];
      }
      return aux;
    });

    return res;
  }
}

export class PolinomicaCoordenadas
  implements IFuncionGenerica<Coordenadas, Coordenadas>
{
  private pol: number[];
  constructor(pol: number[]) {
    this.pol = pol;
  }

  evaluar(value: Coordenadas): Coordenadas {
    let auxX = 0,
      auxY = 0,
      auxZ = 0;

    for (let i = 0; i < this.pol.length; i++) {
      auxX += Math.pow(value.x, i) * this.pol[i];
      auxY += Math.pow(value.y, i) * this.pol[i];
      auxZ += Math.pow(value.z, i) * this.pol[i];
    }

    let res = new Coordenadas(auxX, auxY, auxZ);
    return res;
  }
}
