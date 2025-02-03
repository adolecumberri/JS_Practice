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
    this.dinero = this.dinero + money; //"x = x + y"  se puede escribir como "x += y"
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
    ) { // esta condicion se puede resumir en que la posicion de la matriz no este vacia.
      let fila = Number(posicion[0]) - 1; //estos valores ya los has creado encima del if.
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
*  3.3 Los errores deberian ser mensajes para que las maquina los pasase.
*  3.4 product es un objeto tipo producto, no deberia ser objeto o string.
en vez de un string por defecto, que sea un objeto con valores por defecto.
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

//uso idilico del carril:
let myRail = new Rail(3); //mi carril se instancia con el tamaño maximo.
//SET UP
myRail.productName("fanta to rica");
myRail.price = 300; // he decidido que voy a trabajar en centimos para no gestionar internamente decimales


myRail.addItem({ name: "fanta" });
console.log(myRail.products.length); // 1. 

myRail.addItems([
  { name: "fanta" },
  { name: "fanta" }
]); // este esta en plural porque me deja añadir mas
console.log(myRail.products.length); // 3. 

myRail.extract(); // {name: "fanta"}
console.log(myRail.products.length); // 2

myRail.addItems([
  { name: "fanta" },
  { name: "fanta" }
]); // Max capacity of the rail reached.


/**
 * 4. Monedero
 * 4.1 compruebamoney no cumple el dogma de que cada funcion debe hacer una sola cosa:
 * sustrae dinero y comprueba si se puede comprar, si hay un addMoney, deberia haber un substractMoney
 * 4.2 deberia haber una funcion para desplegar el monedero actual.
 * 4.3 el monedero se ha tragado mi monera.
 * 
 */

// uso idilico del monedero:
let purse = new Purse();
purse.add(100); // trabaja en centimos

purse.displayCash(); // 1.00 €

purse.checkIfAllowed(200) // false

//aqui la maquina envia un mensaje.
purse.checkIfAllowed(99) //true

purse.substract(99);

purse.returnChange(); // devuelve 1 y se vacia.


/**
 * 5. Maquina,
 * 5.1 matriz no tiene sentido como parametro, porque es un valor que creas.
 * 5.2 tenemos que hablar de scopes:
 *  let fila = Number(posicion[0]) - 1; 
    let columna = Number(posicion[1]) - 1;
  5.3 aislaria la logica de obtener fila y columna del string en una sola funcion
  ejemplo: this.split("45"); // {row: 4, column: 5}
 */

let machine = new Maquina(undefined, 4, 4, undefined, undefined);

//uso idilico de la maqiuna.
/**
 * la logica de la maquina me parece bien, en ella tengo poca remarca.
 */

let m = new Machine({
  columns: 4,
  rows: 4,
  length: 5 // esta length va a ir directa al rail
});
// el constructor genera una matriz de 4x4 con length = 5

//SET UP
Machine.updateRail("11", {
  name: "mnm´s",
  price: 120 //internamente trabajo en centimos, ya sabes.
});

Machine.updateRail("12", {
  name: "fanta",
  price: 210 //internamente trabajo en centimos, ya sabes.
})


