"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 - Functions (Name function)
function somarNumeros(num01, num02) {
    return num01 + num02;
}
const resultado = somarNumeros(20, 20);
console.log(resultado);
// Exemplo 02 - Função Anônima (Function Expression)
const saudar02 = function (mensagem) {
    return mensagem;
};
console.log(saudar02('Olá Developers'));
// Exemplo 03 - Arrow Function
const saudar03 = (mensagem) => {
    return mensagem;
};
console.log(saudar03('Oii amigos :)'));
// Exemplo 04 - Function Constructor
const saudar04 = new Function('mensagem', 'return "Function Constructor -> " + mensagem');
console.log(saudar04('Modo estranho de criar função'));
