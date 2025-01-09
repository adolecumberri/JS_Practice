# JS_Practice
JS Exercices

# Índice
- [JS\_Practice](#js_practice)
- [Índice](#índice)
  - [1. Counter](#1-counter)
  - [2. Paso\_por\_referencia.](#2-paso_por_referencia)
  - [3. Array Transformation](#3-array-transformation)
  - [4. Array Filter](#4-array-filter)



## 1. Counter
Write a function that given the number "n", it will return n and then returns 1 more than the previous value every call.

ejemplo:
´´´
const n = ....
counter() // da n
counter() // da n+1
counter() // da n+2
...
...
´´´ 


## 2. Paso_por_referencia.

Escribe una función que reciba un objeto y modifique una de sus propiedades. Observa que el objeto original se modifica fuera de la función, lo que demuestra el paso por referencia en JavaScript.

La propiedad del objeto debe cambiar aun siendo alterada fuera de la funcion

ejemplo:
´´´
let objeto ....

funcion (nombre de la propiedad, objeto)
....

console.log objeto.nombre de la propiedad
funcion ....
console.log objeto.nombre de la propiedad
´´´

## 3. Array Transformation

Dado un Array "arr" y una funcion para mapearlo "fn", crea un nuevo array con la transformacion aplicada.

La manera de crearlo debe ser 
"returnedArray[i] = fn(arr[i], i)"

ejemplo:
´´´
arr = [1,2,3,4];
fn = (n) => n + 1;

const newArray = filter(arr, fn); // [2,3,4,5]
tienes que hacer la funcion filter
´´´


## 4. Array Filter
same than 3 but with a filter.
Given an array "arr" of integers and a filter function, create a function to filter them if the result is thruly

ejemplo:
´´´
arr = [1,2,3,4]
fn = (n) => Boolean(n % 2); //si es impar = true.

cons newArray = filter(arr, fn); // [1,3]
´´´

