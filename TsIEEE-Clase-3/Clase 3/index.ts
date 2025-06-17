import { division } from "./EjerciciosExcep/ejercicio1";
import { PolinomicaArreglos, Polinomica } from "./Funciones/Polinomica";
import {
  FuncionesTrigonometricas,
  TrigonometricaArreglos,
} from "./Funciones/Trigonometrica";
import Coordenadas from "./Interfaces/Coordenadas";

let pi = Math.PI;

//const polinomicaNormal = new Polinomica([0,0,1]);
//console.log(polinomicaNormal.evaluar(5));

const funcionCuadraticaSimpleArreglo = new PolinomicaArreglos([0, 0, 1]);
console.log(funcionCuadraticaSimpleArreglo.evaluar([2, 3, 4, 5]));

const trigonometricaArreglos = new TrigonometricaArreglos(
  FuncionesTrigonometricas.Sin,
);
console.log(
  trigonometricaArreglos.evaluar([0, pi / 4, pi / 2, 3 * (pi / 4), pi]),
);

const coordenadasSin = new Coordenadas(pi / 2, pi / 4, 0);
console.log(coordenadasSin.evaluarSin());

const coordenadasPoli = new Coordenadas(1, 2, 3);
console.log(coordenadasPoli.evaluarPoli());

console.log(division(10, 0));
