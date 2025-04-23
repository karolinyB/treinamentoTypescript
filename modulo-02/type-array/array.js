"use strict";
// ==> Exemplo 01 - Uso de Colchetes
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object (Objeto Array)
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[3]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Francês', 'Espanhol'];
console.log(idiomas);
// Adiciona um elemento no final de uma array
idiomas.push('Mandarim');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
let idiomas1 = ['Português', 'Inglês', 'Francês', 'Espanhol'];
// O método length retorna o tamanho do array | quantidade de elementos no array
console.log(idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
// Pega todo o conteúdo da array
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// ==> Exemplo 06 - Exemplo de array com laço de iteração
let linguagensArray = new Array('Javascript', 'Python', 'PHP', 'C#', 'Typescript');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        const element = linguagens[i];
        console.log(element);
    }
}
funcaoLinguagens(linguagensArray);
