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
class Carril {
  // las propiedades varian en idioma y formato. Busca usar camelCase
  Precio;
  Producto;
  railsize;
  Slots;

  constructor(precio1, producto1, railsize1, slots1) {
    /*
    en
    this.Precio = Precio;
    cada "precio" tiene un scope, uno es el atributo y otro es la propiedad de la clase, los "1" en los nombres no hacen falta
    */
    this.Precio = precio1 ?? 0;
    this.Producto = producto1 ?? "Ninguno";
    this.railsize = railsize1 ?? 8;
    this.Slots = slots1 ?? [];
  }
  extraer() {
    if (this.Slots.length < 1) {
      // throw new SyntaxError("carril vacio, nada que sacar");
      console.log("carril vacio, nada que sacar")
    }
    return this.Slots.pop();
  }

  rellenar(lista) {
    if (this.Slots.length + lista.length > this.railsize) {
      // throw new SyntaxError("carril sobrecargado");
      console.log("carril sobrecargado")
    }
    this.Slots = this.Slots.concat(lista);
    return this.Slots;
  }

  addItem() {
    if (this.Slots.length + 1 > this.railsize) {
      throw new Error("the rail is full");
    }

    // add item to the rail.
  }
}
//5.3 la maquina
class Monedero {
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

class Maquina {
  tipocarril;
  filas;
  columnas;
  matriz;
  monederomaquina;

  constructor(tipocarril1, filas1, columnas1, matriz1, monederomaquina1) {
    this.tipocarril = tipocarril1 ?? new Carril(); // esta propiedad no se usa
    this.filas = filas1 ?? 10;
    this.columnas = columnas1 ?? 10;
    this.matriz = matriz1 ?? [];
    this.monederomaquina = monederomaquina1 ?? new Monedero();

    this.matriz = new Array(this.filas);
    for (let i = 0; i < this.filas; i++) {
      this.matriz[i] = new Array(this.columnas);
      for (let j = 0; j < this.columnas; j++) {
        // si no establezco un tipo de carril, que se cree uno con los valores por defecto, pero aqui solo se usa el hecho por defecto
        this.matriz[i][j] = new Carril();
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
// let mimaquina = new Maquina();
// mimaquina.matriz[1][5].rellenar("m&m's");
// mimaquina.updateFilaName("26", "emanems");
// mimaquina.updateFilaPrice("26", 3);
// mimaquina.consultar("71");
// mimaquina.consultar("26");
// mimaquina.comprar("26");
// //mimaquina.comprar("71");
// mimaquina.monederomaquina.addmoney(6);
// mimaquina.comprar("26");
// mimaquina.comprar("26");


/**
 * Observaciones:
 * 1. las declaraciones de variables son aleatorias respecto a mayusculas/minusculas
 * 2. Spanglish
 */


/**
 * this will fill a rail with a product.
 */
const fillRailWithProduct = (rail, product) => {
  for (let i = 0; i < rail.railsize; i++) {
    rail.addItem(product);
  }
}

/*
* 3. Carril
*  3.1 el constructor es confuso. podria hacerse que recibiera un objero
*    ejemplo: new Carril(,,10,[]);
*  3.2 el rail no acepta un solo item.
*/

// creo el carril con el que voy a rellenar la maquina
let rail = new Carril(undefined, undefined, 10, []);
console.log("1- ", rail.Slots);
console.log("2- ", rail.extraer());
console.log("3- ", rail.Slots);
rail.rellenar(cocacola);
console.log("4- ", rail.Slots);
rail.rellenar([donetes]);
console.log("5-", rail.Slots);
console.log(rail.Slots)

let machine = new Maquina();
