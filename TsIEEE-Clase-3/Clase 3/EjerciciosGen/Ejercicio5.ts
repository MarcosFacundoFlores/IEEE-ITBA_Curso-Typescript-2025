import FuncionGenerica from "../Interfaces/IFuncionGenerica";

export default class ejercicio5 implements FuncionGenerica<any[], any> {
  evaluar(arreglo: any[]): any {
    if (arreglo) return arreglo[0];
    else return undefined;
  }
}
