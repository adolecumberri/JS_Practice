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
  Slots;

  extraer() {
    return Slots.pop()
  }

  rellenar(lista) {
    if (lista.length <= obj.railsize) {
      for (let i = 0; i < lista.length; i++) {
        Slots[i] = lista[i];
      }
    }
    return Slots;
  }

  constructor(obj) {
    Precio = obj.Precio ?? 0;
    Producto = obj.Producto ?? "Ninguno";
    Slots = new Array(obj.railsize ?? 8);
  }
}
//5.3 la maquina
let maquina = {};
