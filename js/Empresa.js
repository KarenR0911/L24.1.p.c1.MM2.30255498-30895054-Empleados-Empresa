export default class Empresa {
  constructor() {
    this.contMasc = 0;
    this.acumEdadMasc = 0;
    this.mayorEdadFem = 0;
    this.auxNomFem = "";
  }
  procesarEmpleado(emp) {
    if (emp.sexo == "M") {
      this.contMasc++;
      this.acumEdadMasc += emp.edad;
    } else {
      if (emp.edad > this.mayorEdadFem) {
        this.mayorEdadFem = emp.edad;
        this.auxNomFem = emp.nombre;
      }
    }
  }
  calcPromMasc() {
    return this.acumEdadMasc / this.contMasc;
  }
  devolverNomFem() {
    return this.auxNomFem;
  }
  devolverEdadFem() {
    return this.mayorEdadFem;
  }
}
