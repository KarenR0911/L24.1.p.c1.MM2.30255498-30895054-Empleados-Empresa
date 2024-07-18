export default class Empleado {
  constructor(nom, s, ed) {
    this.nombre = nom;
    this.sexo = s;
    this.edad = ed;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set sexo(s) {
    this._sexo = s;
  }
  set edad(ed) {
    this._edad = ed;
  }
  get nombre() {
    return this._nombre;
  }
  get sexo() {
    return this._sexo;
  }
  get edad() {
    return this._edad;
  }
}
