// ==> Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message);
}

console.log(error('Interrompendo a função!'));

// ==> Exemplo 02: Never inferido automaticamente

function rejectMessage()  {
    return error('Interrompendo a função parte II');
}

console.log(rejectMessage());

// ==> Exemplo 03: Função que contém um loop infinito retorna o tipo never

const loopInfinito = function loop() {
    while(true) {
        console.log('Oi, Developers!');
    }
}

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const algumaCoisaVoid: void = null;
// const algumaCoisaNerver: never = null; 