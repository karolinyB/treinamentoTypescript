"use strict";
// => Exemplo 01 - Funções
function logError(errorMessage) {
    console.log(errorMessage);
    //return errorMessage;
}
logError('Required field: Name!');
// => Exemplo 02 - Funções com Arrow Functions
const logErrorExampleTwo = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExampleTwo('Required field: Surname!');
// => Exemplo 03 - Uso do void em variáveis
let varivelExample;
// varivelExample = 1; Apresenta ERRO
varivelExample = null;
varivelExample = undefined;
