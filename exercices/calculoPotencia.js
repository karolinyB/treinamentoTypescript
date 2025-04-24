"use strict";
let num = 5;
let expo = 3;
function calculoPotencia(numero, expoente) {
    if (expoente === 0) {
        return 1;
    }
    return numero * calculoPotencia(numero, --expoente);
}
console.log(calculoPotencia(num, expo));
