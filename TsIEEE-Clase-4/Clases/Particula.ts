export default class Particula {
  private x: number;
  private y: number;
  private z: number;
  private masa: number;
  constructor(x: number, y: number, z: number, masa: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.masa = masa;
  }
  calcularInercia(): number {
    return (this.x ** 2 + this.y ** 2 + this.z ** 2) * this.masa;
  }
}

const arregloParticulas: readonly Particula[] = [
  new Particula(0, 0, 0, 200),
  new Particula(100, 100, 100, 0),
  new Particula(10, 10, 10, 200),
];

function momentoInerciaCuerpo(arregloParticulas: readonly Particula[]): number {
  let calculoInerciaIndividual: number[] = arregloParticulas.map((value) =>
    value.calcularInercia(),
  );

  let inerciaCalculada: number = calculoInerciaIndividual.reduce(
    (previousValue: number, currentValue: number) =>
      previousValue + currentValue,
  );

  return inerciaCalculada;
}

console.log(momentoInerciaCuerpo(arregloParticulas));
