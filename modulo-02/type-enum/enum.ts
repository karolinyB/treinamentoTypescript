// ==> Exemplo 01: Numeric Enums (Enums numéricos)

enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
}

console.log(Idioma);

// ==> Exemplo 02: String Enums 

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
}

console.log(Dia.Segunda);

// ==> Exemplo 03: Acesso ao valor de um Enum com Chaves

const enum Comida {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta =  'Torta',
    Churrasco = 'Churrasco',
}

function comida(c: Comida) {
    return 'Comidas muito apetitosas! ';
}

console.log(comida(Comida.Torta));
console.log(comida(Comida.Churrasco));
//console.log(comida(4)); // Tomar cuidado com esse tipo de uso

// ==> Exemplo 04: Quando usar Enum?

enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
}

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa concluída!');
}