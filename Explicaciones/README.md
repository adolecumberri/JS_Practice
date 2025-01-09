
# INDICE

- [Conversion de tipos](#conversiones-de-tipos)







# Conversiones de Tipos

A continuación se muestra una tabla con las conversiones de diferentes tipos de datos a valores booleanos en JavaScript. Estas conversiones se producen cuando el valor se utiliza en una expresión condicional, como en un `if`.

## Tabla de Conversiones de Tipos a Booleano

| **Valor**                                          | **Valor convertido a booleano** |
| -------------------------------------------------- | ------------------------------- |
| `false`                                            | `false`                         |
| `0`                                                | `false`                         |
| `-0`                                               | `false`                         |
| `0n` (BigInt cero)                                 | `false`                         |
| `""` (string vacío)                                | `false`                         |
| `null`                                             | `false`                         |
| `undefined`                                        | `false`                         |
| `NaN`                                              | `false`                         |
| `true`                                             | `true`                          |
| `1`, `-1`, cualquier número distinto de 0          | `true`                          |
| `"0"`, `"false"`, `"a"`, cualquier string no vacío | `true`                          |
| `[]` (array vacío)                                 | `true`                          |
| `[1, 2, 3]` (array no vacío)                       | `true`                          |
| `{}` (objeto vacío)                                | `true`                          |
| `function() {}` (función)                          | `true`                          |
| `Symbol()`                                         | `true`                          |
| `BigInt(1)`                                        | `true`                          |

## Ejercicios para Practicar Conversiones a Booleano

### Ejercicio 1: Verifica si un valor es *falsy*

Escribe una función que reciba un valor y devuelva `true` si es *falsy* (es decir, `false`, `0`, `-0`, `null`, `undefined`, `NaN` o un string vacío) y `false` si es *truthy*.

```javascript
function esFalsy(valor) {
    return !valor;
}

console.log(esFalsy(0));        // true
console.log(esFalsy(""));       // true
console.log(esFalsy(null));     // true
console.log(esFalsy(NaN));      // true
console.log(esFalsy("Hola"));   // false
console.log(esFalsy(5));        // false
