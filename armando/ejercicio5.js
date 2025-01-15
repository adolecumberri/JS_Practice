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
let maquina = {};
