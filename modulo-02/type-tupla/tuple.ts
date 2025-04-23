// ==> Exemplo 01 - Uso simples de Tuplas em Typescript
let pessoa: [string, string, number];
pessoa = ['Ana','Developer', 18];
console.log(pessoa[0]);

// ==> Exemplo 02 - Acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['Vitinho','Developer', 18];

console.log(pessoa1[0]);

// ==> Exemplo 02 - Outra forma de usar Tuplas em Typescript (com lables)
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// ******* Parei aqui **********//