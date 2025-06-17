interface IEmpleado {
  id: number;
  nombre: string;
  salario: number;
}

class EmpleadoDatabase {

  private empleados: IEmpleado[] = [];

  constructor(empleados: IEmpleado[]) {
    this.empleados = empleados;
  }

  getEmpleadoPorId(id: number): IEmpleado | undefined {
    return this.empleados.find(empleado => empleado.id === id);
  }
  
}