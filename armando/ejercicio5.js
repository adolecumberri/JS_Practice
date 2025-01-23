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

  constructor(precio1, producto1, railsize1, slots1) {
    this.Precio = precio1 ?? 0;
    this.Producto = producto1 ?? "Ninguno";
    this.railsize = railsize1 ?? 8;
    this.Slots = slots1 ?? [];
  }
  extraer() {
    if (this.Slots.length < 1) {
      throw new SyntaxError("carril vacio, nada que sacar");
    }
    return this.Slots.pop();
  }

  rellenar(lista) {
    if (this.Slots.length + lista.length > this.railsize) {
      throw new SyntaxError("carril sobrecargado");
    }
    this.Slots = this.Slots.concat(lista);
    return this.Slots;
  }
}
//5.3 la maquina
class monedero {
  dinero;
  constructor(dineroinicial) {
    this.dinero = dineroinicial ?? 0;
  }
  addmoney(money) {
    this.dinero = this.dinero + money;
    return this.dinero;
  }
  compruebamoney(money) {
    //aqui money es el precio del producto
    if (money > this.dinero) {
      console.log("falta dinero");
      return false;
    } else {
      console.log("dinero suficiente");
      this.dinero = this.dinero - money;
      return true;
    }
  }
}

class maquina {
  tipocarril;
  filas;
  columnas;
  matriz;
  monederomaquina;

  constructor(tipocarril1, filas1, columnas1, matriz1, monederomaquina1) {
    this.tipocarril = tipocarril1 ?? new carril();
    this.filas = filas1 ?? 10;
    this.columnas = columnas1 ?? 10;
    this.matriz = matriz1 ?? [];
    this.monederomaquina = monederomaquina1 ?? new monedero();

    this.matriz = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.matriz[i] = new Array(this.columnas);
      for (let j = 0; j < this.columnas; j++) {
        this.matriz[i][j] = new carril();
      }
    }
  }
  updateFilaName(posicion, name) {
    let fila = Number(posicion[0]) - 1;
    let columna = Number(posicion[1]) - 1;
    return (this.matriz[fila][columna].Producto = name);
  }

  updateFilaPrice(posicion, precio) {
    let fila = Number(posicion[0]) - 1;
    let columna = Number(posicion[1]) - 1;
    return (this.matriz[fila][columna].Precio = precio);
  }

  consultar(posicion) {
    let fila = Number(posicion[0]) - 1;
    let columna = Number(posicion[1]) - 1;
    if (
      this.matriz[fila][columna].Producto !== "Ninguno" ||
      this.matriz[fila][columna].Precio !== 0
    ) {
      let fila = Number(posicion[0]) - 1;
      let columna = Number(posicion[1]) - 1;
      return console.log(
        this.matriz[fila][columna].Producto +
          " a " +
          (this.matriz[fila][columna].Precio + "")
      );
    } else {
      return console.log("producto no disponible");
    }
  }

  comprar(posicion) {
    let fila = Number(posicion[0]) - 1;
    let columna = Number(posicion[1]) - 1;

    if (
      this.monederomaquina.compruebamoney(this.matriz[fila][columna].Precio)
    ) {
      return console.log(
        "entregado item " +
          this.matriz[fila][columna].extraer() +
          " // cambio de " +
          this.monederomaquina.dinero
      );
    } else {
      return console.log("compra fallida");
    }
  }
}

//probando cosas
let mimaquina = new maquina();
mimaquina.matriz[1][5].rellenar("m&m's");
mimaquina.updateFilaName("26", "emanems");
mimaquina.updateFilaPrice("26", 3);
mimaquina.consultar("71");
mimaquina.consultar("26");
mimaquina.comprar("26");
//mimaquina.comprar("71");
mimaquina.monederomaquina.addmoney(6);
mimaquina.comprar("26");
mimaquina.comprar("26");