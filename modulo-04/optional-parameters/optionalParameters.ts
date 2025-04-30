// Exemplo 01 - Optional Parameters

// Padrão -> Os parâmetros opcionais normalmente são inseridos ao final, após os parâmetros obrigatórios
function informarDadosPessoais(idPessoa: number, nome: string, email?: string) {
    console.log('Id - Funcionário...: ', idPessoa, '| Nome...: ', nome);

    if (email !== undefined) console.log('Email...: ', email);
}

informarDadosPessoais(198789, 'Ana Karoliny');
informarDadosPessoais(893393, 'Joana da Silva', 'joaninha.da.silva@sodexo.com.br');

// Exemplo 02 - Optional Parameters

function mensagemLog(mensagem: string, userId?: number) {
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, userId || 'User not connected :/');
}

mensagemLog('You are connected :)', 98766);
mensagemLog(`Update page :|`);

// Exemplo 03

type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
}

let person: Pessoa;

person = {
    idFuncionario: 122421,
    nome: 'Marina Nunes',
};

console.log(person);
