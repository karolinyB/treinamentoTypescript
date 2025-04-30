"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo com Ternário (? : ) - if else
const idadeVotacao = 18;
if (idadeVotacao >= 18) {
    console.log('Você elegível para votar');
}
else {
    console.log('Você não elegível para votar');
}
// Ternário
const idadeVot = 16;
const podeVotar = (idadeVot >= 18) ? 'Você é elegível para votar' : 'Você não elegível para votar';
console.log(podeVotar);
