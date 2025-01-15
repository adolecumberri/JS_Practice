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
  Slots = new Array(obj.railsize);
  extraer() {
    if (this.Slots.length > 0) {
      return Slots.pop();
    } else {
      throw new SyntaxError("carril vacio, nada que sacar");
    }
  }

  rellenar(lista) {
    recarga = this.Slots.concat(lista);
    if (recarga.length > railsize) {
      throw new SyntaxError("carril sobrecargado");
    } else {
      Slots = recarga;
      return Slots;
    }
  }

  constructor(obj) {
    Precio = obj.Precio ?? 0;
    Producto = obj.Producto ?? "Ninguno";
    railsize = obj.railsize ?? 8;
  }
}
//5.3 la maquina
let maquina = {};
