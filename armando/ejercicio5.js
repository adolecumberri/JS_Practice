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
class monedero {
  dinero;
  constructor(obj) {
    dinero = obj.dinero ?? 0;
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

  constructor(obj) {
    tipocarril = obj.tipocarril ?? new carril();
    filas = obj.filas ?? 10;
    columnas = obj.columnas ?? 10;
    matriz = obj.matriz ?? [];
    monederomaquina = obj.monederomaquina ?? new monedero();

    this.matriz = new Array(filas);
    for (let i = 0; i < this.filas; i++) {
      this.matriz[i] = new Array(columnas);
      for (let j = 0; j < this.columnas; j++) {
        this.matriz[i][j] = new carril();
      }
    }
  }
  updateFilaName(posicion, name) {
    fila = Number(posicion[0]) - 1;
    columna = Number(posicion[1]) - 1;
    return (this.matriz[fila][columna].Producto = name);
  }

  updateFilaPrice(posicion, precio) {
    fila = Number(posicion[0]) - 1;
    columna = Number(posicion[1]) - 1;
    return (this.matriz[fila][columna].Precio = precio);
  }

  consultar(posicion) {
    if (
      this.matriz[fila][columna].Producto === "Ninguno" ||
      this.matriz[fila][columna].Precio === 0
    )
      fila = Number(posicion[0]) - 1;
    columna = Number(posicion[1]) - 1;
    return (
      this.matriz[fila][columna].Producto +
      "a" +
      (this.matriz[fila][columna].Precio + "")
    );
  }

  comprar(posicion) {
    fila = Number(posicion[0]) - 1;
    columna = Number(posicion[1]) - 1;

    if (
      this.monederomaquina.compruebamoney(this.matriz[fila][columna].Precio)
    ) {
      return "entregado item " + this.matriz[fila][columna].extraer()+"cambio de "+this.monederomaquina.dinero;
    }
    else {return "compra fallida";}
  }
}

//probando cosas
//let mimaquina=new maquina;
//mimaquina.updateFilaName("26","emanems")
let purse = new monedero();
console.log(purse.dinero)
