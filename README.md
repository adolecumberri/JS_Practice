# JS_Practice
JS Exercices

# Índice
- [JS\_Practice](#js_practice)
- [Índice](#índice)
  - [1. Counter](#1-counter)
  - [2. Paso\_por\_referencia.](#2-paso_por_referencia)
  - [3. Array Transformation](#3-array-transformation)
  - [4. Array Filter](#4-array-filter)
  - [5. Vending Machine](#5-vending-machine)



## 1. Counter
Write a function that given the number "n", it will return n and then returns 1 more than the previous value every call.

ejemplo:
```
const n = ....
counter() // da n
counter() // da n+1
counter() // da n+2
...
...
``` 


## 2. Paso_por_referencia.

Escribe una función que reciba un objeto y modifique una de sus propiedades. Observa que el objeto original se modifica fuera de la función, lo que demuestra el paso por referencia en JavaScript.

La propiedad del objeto debe cambiar aun siendo alterada fuera de la funcion

ejemplo:
```
let objeto ....

funcion (nombre de la propiedad, objeto)
....

console.log objeto.nombre de la propiedad
funcion ....
console.log objeto.nombre de la propiedad
```

## 3. Array Transformation

Dado un Array "arr" y una funcion para mapearlo "fn", crea un nuevo array con la transformacion aplicada.

La manera de crearlo debe ser 
"returnedArray[i] = fn(arr[i], i)"

ejemplo:
```
arr = [1,2,3,4];
fn = (n) => n + 1;

const newArray = filter(arr, fn); // [2,3,4,5]
tienes que hacer la funcion filter
```


## 4. Array Filter
same than 3 but with a filter.
Given an array "arr" of integers and a filter function, create a function to filter them if the result is thruly

ejemplo:
```
arr = [1,2,3,4]
fn = (n) => Boolean(n % 2); //si es impar = true.

cons newArray = filter(arr, fn); // [1,3]
```

## 5. Vending Machine

Objetos!
Crear una maquina expendedora y objetos.
- 5.1 crear objetos para la maquina.
        esta estructura es un json o una clase de ES6. EL objeto recibira el nombre al crearse y se asignara a traves del constructor.
- 5.2 Crear los carriles de la maquina espendedora:
  cada carril tiene un precio asignado y el nombre del producto que contiene.
  (si, el precio lo tiene el carril y no el producto.)

  al crearse el carril se creará vacio pero con un tamaño predeterminado. (ej: 8 huecos para productos, todos vacios)

  el carril podrá entregar el primer objeto que tenga y podrá rellenarse con una lista.

  al soltar producto, los demas productos deben desplazarse y el carril debe mantener el tamaño original.

  el carril debe aceptar una lista de productos que añadira a los que ya existen teniendo encuenta no superar el maximo (no controla que los productos sean distintos)

- 5.3 LA MAQUINA, aqui empieza la broma:

  La maquina al crearla debe recibir 1 tipo de carril (que dictaminará comos son todos los demas), las filas y las columnas que la formaran.
        Al crearse la clase sebera tener sus respectivas filas y sus respectivas columnas y en cada una un objeto fila/carril o como lo llames.

  la maquina debe gestionar todo el dinero con un objeto monedero, el cual va a recibir el dinero, gestionar la combra y dar el visto bueno a una compra o no. (ej: 2€ en el monedero, una compra de un producto que valga 6€, pues no debe dar el visto bueno el monedero, debe dar feedback)

  La maquina debe poder actualizar cada precio de cada fila y cada producto.

  La maquina debe aceptar dinero y gestionarlo

  La maquina debe poder soltar un producto si tienes suficiente dinero

  La maquina debe dar la informacion de los productos si preguntas por ellos

  cada fila debe consultarsela con un string que sera un numero (ej: "15" fila 1 columna 5) los strings no tienen en cuenta los indices, pero por dentro se debe trabajar con indices (del 0 al 9, no del 1 al 10.)

  si una fila no tiene nombre la maquina no debe dejar consultarla.
  si una fila no tiene precio la maquina no debe dejar consultarla.

- 5.4 Prueba:
    creas 4,5 objetos.
    creas 1 objeto fila
    creas una maquina, añades su tipo de fila y su tamaño.

    customizas las filas:
    updateFilaName  "11", "colacoca"
    updateFilaPrice "11", 5

    consultar "11" // "cocacola a 5€"

    añadir dinero "3"

    comprar "11" // "error"

    añadir dinero "3"

    comprar "11" // entregado item: colacoca
    // Cambio de 1

    cosas así



        


        
