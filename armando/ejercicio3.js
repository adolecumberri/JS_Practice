let arr = [1, 2, 3, 4];
//fn = (n) => n + 1;
function fn(arr, i) {
    arr[i] = arr[i] + 1
    return arr[i]
}

function filter(arr, fn) {
    let i = 0;
    let returnedArray = arr;
    while (i < arr.length) {
        returnedArray[i] = fn(arr, i)
        i++
    }

    return returnedArray
}
const newArray = filter(arr, fn); // [2,3,4,5] 

console.log("original array", arr); // [2,3,4,5]
console.log("new array", newArray); // [2,3,4,5]

/*
 en la linea 10 igualas returned array y arr. Como arr es un objeto complejo, javascript lo pasa por referencia
 (pasa la id o la direccion a memoria, no el objeto.) por lo que al modificar returned array, tambien se modifica arr.
*/

let a = [1, 2, 3, 4];
let alterFunction = (valueToAlter) => valueToAlter + 1; //recivo valor, devuelvo valor alterado.

function filter2(arr, fn) {
    /*
    map devuelve un array, y como mi funcion fn devuelve siempre un numero, 
    map forma un array con el numero que devuelve fn en cada casilla
    */
    return arr.map(fn);
}

function filter3(arr, fn) {
    /*
    for es computacionalmente mas eficiente, pero map es mas legible.
    aqui creo una variable externa (newArray) y la voy llenando con los valores que devuelve fn
    */
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i]);
    }

    return newArray;
}

function filter4(arr, fn) {
    //lo mismo que en filter3, pero con while
    let newArray = [];

    let i = 0;
    while (i < arr.length) {
        newArray[i] = fn(arr[i]);
        i++;
    };

    return newArray;
}

console.log("original array", a); // [1,2,3,4]
console.log("new array", filter2(a, alterFunction)); // [2,3,4,5]

console.log("filter 3", filter3(a, alterFunction)); // [2,3,4,5]

console.log("filter 4", filter4(a, alterFunction)); // [2,3,4,5]