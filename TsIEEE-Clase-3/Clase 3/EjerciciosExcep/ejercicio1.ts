export function division(operador: number, operando: number): number {
  try {
    return operador / operando;
  } catch {
    throw "no se puede dividir entre 0";
  }
}
