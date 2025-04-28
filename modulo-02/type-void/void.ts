// => Exemplo 01 - Funções

function logError(errorMessage: string) {
    console.log(errorMessage);

    //return errorMessage;
}

logError('Required field: Name!');

// => Exemplo 02 - Funções com Arrow Functions

const logErrorExampleTwo = (errorMessage: string): void => {
    console.log(errorMessage);
}

logErrorExampleTwo('Required field: Surname!');


// => Exemplo 03 - Uso do void em variáveis

let varivelExample: void;

// varivelExample = 1; Apresenta ERRO
varivelExample = null;
varivelExample = undefined;
