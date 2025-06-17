enum EMedios {
  Tierra = 0,
  Agua = -1,
  Aire = 1,
}

interface IVehiculo {
  cantRuedas: number;
  nivelTanque: number;
  matricula: string;
  medio: EMedios;
  setTanque(newNivelTanque: number): void;
  sePuedeMoverA(posicion: IPosicion): boolean;
}

interface IPosicion {
  x: number;
  y: number;
  z: number;
}

class Auto implements IVehiculo {
  cantRuedas: number;
  nivelTanque: number;
  matricula: string;
  medio: EMedios;

  constructor(matricula: string) {
    this.cantRuedas = 4;
    this.nivelTanque = 1.0;
    this.matricula = matricula;
    this.medio = EMedios.Tierra;
  }

  setTanque(newNivelTanque: number): void {
    this.nivelTanque = newNivelTanque;
  }

  sePuedeMoverA(posicion: IPosicion): boolean {
    return posicion.z === 0;
  }
}

class Avion implements IVehiculo {
  cantRuedas: number;
  nivelTanque: number;
  matricula: string;
  medio: EMedios;

  constructor(matricula: string, cantRuedas: number) {
    this.cantRuedas = cantRuedas;
    this.nivelTanque = 1.0;
    this.matricula = matricula;
    this.medio = EMedios.Aire;
  }

  setTanque(newNivelTanque: number): void {
    this.nivelTanque = newNivelTanque;
  }

  sePuedeMoverA(posicion: IPosicion): boolean {
    return posicion.z >= 0;
  }
}

class Submarino implements IVehiculo {
  cantRuedas: number;
  nivelTanque: number;
  matricula: string;
  medio: EMedios;

  constructor(matricula: string) {
    this.cantRuedas = 0;
    this.nivelTanque = 1.0;
    this.matricula = matricula;
    this.medio = EMedios.Agua;
  }

  setTanque(newNivelTanque: number): void {
    this.nivelTanque = newNivelTanque;
  }

  sePuedeMoverA(posicion: IPosicion): boolean {
    return posicion.z <= 0;
  }
}

let arregloVehiculos: IVehiculo[] = [
  new Auto("AAA111"),
  new Avion("BBB222", 3),
  new Submarino("CCC333"),
];
