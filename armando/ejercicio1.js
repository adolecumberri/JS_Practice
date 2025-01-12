const n = 0;
let contador = n - 1;
function counter() {
    ++contador;
    return contador
}
counter() // da n
console.log(contador)
counter()// da n+1
console.log(contador)
counter()// da n+2
console.log(contador)



/*
 ++var suma 1 y devuelve la varianle.
 var++ devuelve la variable y luego suma 1
*/

let count = 0;

function counter2() {
    return count++;
};

console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3

