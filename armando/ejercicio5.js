//5.1 los objetos de la maquina
let chocobones = {
  Name: "ChocoBon",
  Fabricante: "Cuetara",
  Pesogramos: 200,
};
let cocacola = {
  Name: "CocaCola",
  Fabricante: "CokeCompany",
  Pesogramos: 150,
};
let bifrutas = {
  Name: "BiFrutas Tropical",
  Fabricante: "DonSimon",
  Pesogramos: 120,
};
let donetes = {
  Name: "Donettes",
  Fabricante: "Bimbo",
  Pesogramos: 350,
};
//5.2 los carriles de la maquina
class carril {
  Precio;
  Producto;
  railsize;
  Slots;

  constructor(obj) {
    Precio = obj.Precio ?? 0;
    Producto = obj.Producto ?? "Ninguno";
    railsize = obj.railsize ?? 8;
    Slots = obj.Slots ?? [];
  }
  extraer() {
    if (this.Slots.length < 1) {
      throw new SyntaxError("carril vacio, nada que sacar");
    }
    return Slots.pop();
  }

  rellenar(lista) {
    if (this.Slots.length + lista.length > this.railsize) {
      throw new SyntaxError("carril sobrecargado");
    }
    Slots = this.Slots.concat(lista);
    return Slots;
  }
}
//5.3 la maquina
class maquina {
  tipocarril;
  filas;
  columnas;
  matriz
  constructor(obj) {
    tipocarril = obj.tipocarril ?? carril;
    filas = obj.filas ?? 10;
    columnas = obj.columnas ?? 10;
    matriz=obj.matriz ?? [];

    this.matriz = new Array(filas);
    for (let i = 0; i < this.columnas; i++) {
      this.matriz[i] = new Array(columnas);
      for (let j = 0; j < this.columnas; j++) {
        this.matriz[(i, j)] = new carril();
      }
    }
  }
  updateFilaName(posicion, name) {
    fila = posicion[0] - 1;
    columna = posicion[1] - 1;
    return this.matriz[fila,columna].Producto = name;
  }

  updateFilaPrice(posicion, precio) {
    fila = posicion[0] - 1;
    columna = posicion[1] - 1;
    return this.matriz[fila,columna].Precio = precio;
  }
}
