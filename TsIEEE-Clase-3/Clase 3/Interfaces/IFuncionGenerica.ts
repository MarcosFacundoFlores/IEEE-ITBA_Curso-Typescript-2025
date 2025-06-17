interface FuncionGenerica<Recibe, Devuelve> {
  evaluar: (x: Recibe) => Devuelve;
}
export default FuncionGenerica;
