// ==> Exemplo 01 - Uso simples de Tuplas em Typescript
let pessoa: [string, string, number];
pessoa = ['Ana','Developer', 18];
console.log(pessoa[0]);

// ==> Exemplo 02 - Acessando o valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['Vitinho','Developer', 18];

console.log(pessoa1[0]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em Typescript (com lables)
let pessoa2: [nome: string, posicao: string, idade: number] = ['Ana Karoliny', 'Developer Full Stack', 18];
console.log(pessoa2);

// ==> Exemplo 04 - Usando tuplas com Spread Operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// Deve ser utilizado o spread operator antes da tupla para exibir o conteúdo corretamente
console.log(...listaFrutas);

// ==> Exemplo 05 - Lista Heterogênea com Tuplas
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// ==> Exemplo 06 - Uso de função com tuplas
function listarPessoas(nomes: string[], idade: number[]) // idade e nome são tuplas
{
    //return nomes, idade; // Forma errada de se utilizar, uma vez que o javascript/typescript entende a ',' como o operador de vírgula
                            // de forma que retorne somente o último valor, que nesse caso é 'idade' e não considera o termo antes da virgula


    return { ...idade, ...nomes }; // 'idade' e 'nomes' são exibidor em forma de objeto
    // return [...idade, ...nomes]; // Também pode ser feito. Nesse caso, 'idade' e 'nomes' são espalhados para dentro de um array

}

let resultado = listarPessoas(['Ana', 'Vitinho'], [18, 19]);
console.log(resultado);

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
            | [primeiroNome: string, sobrenome: string] // Ou esse
            | [primeiroNome: string, nomeMeio: string, sobrenome: string]; // Ou esse

function criarPessoa(...nome: Nome) 
{
    return nome;
}

console.log(criarPessoa('Ana', 'Karoliny'));
console.log(criarPessoa('Ana', 'Karoliny', 'Azevedo Silva'));