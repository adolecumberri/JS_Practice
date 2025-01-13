arr = [1,2,3,4]
fn = (n) => Boolean(n % 2); //si es impar = true.

function filter(arr, fn) {
    
    let newArray = [];

    let i = 0;

    while (i < arr.length) {
        if (fn(arr[i])){
            newArray.push(arr[i]);
        }
        i++;
    };

    return newArray;
}

const newArray = filter(arr, fn); // [1,3]
console.log(newArray)