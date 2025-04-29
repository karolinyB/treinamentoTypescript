// ==> Exemplo 01 -> Exemplo básico do uso do Type Object

export {};

const person = {
  nome: "Ana",
  idade: 18,
  funcao: "Front-end Developer",
};

console.log(person);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)

function onBoarding01(funcionario: { nome: string }) {
  return "Seja Bem Vinda: " + funcionario.nome;
}

console.log(onBoarding01({ nome: "Ana" }));

// ==> Exemplo 03 -> object nomeados

interface Pessoa {
  nome: string;
  funcao: string;
}

function onBoarding02(pessoa: Pessoa) {
  return (
    "Seja bem vinda " +
    pessoa.nome +
    "!" +
    " Sua função é " +
    pessoa.funcao +
    "."
  );
}

console.log(onBoarding02({ nome: "Aninha", funcao: "Front-end Developer" }));

// ==> Exemplo 04 -> object como type alias (usando interface)

type Pessoa04 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onBoarding03(pessoa: Pessoa04) {
  return (
    "Seja bem vinda " +
    pessoa.nome +
    "!" +
    " Sua função é " +
    pessoa.funcao +
    "." +
    " Você trabalhará com a linguagem " +
    pessoa.linguagem
  );
}

console.log(
  onBoarding03({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
  })
);

// ==> Exemplo 05 -> usando optional no object

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string; // Dado opcional
}

function onBoarding05(pessoa: Pessoa05) {
  return (
    "Seja bem vinda " +
    pessoa.nome +
    "!" +
    " Sua função é " +
    pessoa.funcao +
    "." +
    " Você trabalhará com a linguagem " +
    pessoa.linguagem
  );
}

console.log(
  onBoarding05({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
    email: "ana.silva@baymetrics.com",
  })
);

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readonly')

interface Pessoa06 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string; // Dado que não pode ser alterado posteriormente pelo desenvolvedor
                          // Impede a modificação da propriedade após criação
}

function onBoarding06(pessoa: Pessoa06) {
  return (
    "Seja bem vinda " +
    pessoa.nome +
    "!" +
    " Sua função é " +
    pessoa.funcao +
    "." +
    " Você trabalhará com a linguagem " +
    pessoa.linguagem +
    " Seu e-mail será: " +
    pessoa.email +
    "."
  );
}

console.log(
  onBoarding06({
    nome: "Aninha",
    funcao: "Front-end Developer",
    linguagem: "Typecript",
    email: "ana.silva@baymetrics.com",
  })
);

// ==> Exemplo 07 -> tipos de extensões (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha =  {
    nome: 'Helena',
    sobrenome: 'Azevedo',
    idade: 10,
}

console.log(filha);

// ==> Exemplo 08 -> Tipos de extensões (interseção)

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}

type Animal = Cachorro & Gato;



// ==> Exemplo 09 -> Generic Objects

type User = {
    nome: string,
    email: string,
}

type Admin = {
    nome: string,
    email: string,
    admin: boolean;
}

const user: User = {
    nome: 'Ana',
    email: 'ana.silva@baymetrics.com'
}

const admin: Admin = {
    nome: 'Ana',
    email: 'ana.silva@baymetrics.com',
    admin: true,
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<User>(user));
console.log(acessarSistema<Admin>(admin));

/*function acessarSistema(usuario: User) {
    return usuario;
}*/

//console.log(acessarSistema(user));