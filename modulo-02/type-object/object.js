"use strict";
// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    nome: "Ana",
    idade: 18,
    funcao: "Front-end Developer",
};
console.log(person);
// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onBoarding01(funcionario) {
    return "Seja Bem Vinda: " + funcionario.nome;
}
console.log(onBoarding01({ nome: "Ana" }));
function onBoarding02(pessoa) {
    return ("Seja bem vinda " +
        pessoa.nome +
        "!" +
        " Sua função é " +
        pessoa.funcao +
        ".");
}
console.log(onBoarding02({ nome: "Aninha", funcao: "Front-end Developer" }));
function onBoarding03(pessoa) {
    return ("Seja bem vinda " +
        pessoa.nome +
        "!" +
        " Sua função é " +
        pessoa.funcao +
        "." +
        " Você trabalhará com a linguagem " +
        pessoa.linguagem);
}
console.log(onBoarding03({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
}));
function onBoarding05(pessoa) {
    return ("Seja bem vinda " +
        pessoa.nome +
        "!" +
        " Sua função é " +
        pessoa.funcao +
        "." +
        " Você trabalhará com a linguagem " +
        pessoa.linguagem);
}
console.log(onBoarding05({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
    email: "ana.silva@baymetrics.com",
}));
function onBoarding06(pessoa) {
    return ("Seja bem vinda " +
        pessoa.nome +
        "!" +
        " Sua função é " +
        pessoa.funcao +
        "." +
        " Você trabalhará com a linguagem " +
        pessoa.linguagem +
        " Seu e-mail será: " +
        pessoa.email +
        ".");
}
console.log(onBoarding06({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
    email: "ana.silva@baymetrics.com",
}));
const filha = {
    nome: 'Helena',
    sobrenome: 'Azevedo',
    idade: 10,
};
console.log(filha);
const user = {
    nome: 'Ana',
    email: 'ana.silva@baymetrics.com'
};
const admin = {
    nome: 'Ana',
    email: 'ana.silva@baymetrics.com',
    admin: true,
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(user));
console.log(acessarSistema(admin));
/*function acessarSistema(usuario: User) {
    return usuario;
}*/
//console.log(acessarSistema(user));
