"use strict";
// Exemplo 01 - loop for
for (let index = 0; index < 10; index++) {
    console.log(index);
}
// Exemplo 02 - for ... of - (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros = [10, 20, 30, 40];
for (const i of arrayNumeros) {
    console.log(i);
}
// Exemplo 03 - for ... in
const arrayNumeros01 = [5, 4, 3, 2, 1];
for (const i in arrayNumeros01) {
    console.log(i);
}
// sort() -> ordena o array do menor para o maior
const ordemNumerica = arrayNumeros01.sort();
console.log(ordemNumerica);
