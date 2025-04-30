"use strict";
// criar as variáveis
// criar o vetor
// identificar o tamanho do vetor
// as comparações no vetor seguindo o método bubble sort
//let vetor: number[] = [25, 3, 2, 7, 9, 12, 6, 0, 95, 78, 9, 45, 100];
//let vetor: number[] = [0, 2, 3, 6, 7, 9, 9, 12, 25, 45, 78, 95, 100];
let vetor = [17, 89, 22, 15, 42, 31, 5, 19, 95, 13, 67, 29, 3];
let numTrocas, numComparacoes, aux;
numTrocas = numComparacoes = aux = 0;
let tamanhoVetor = vetor.length;
for (let p = 0, t = tamanhoVetor; p < tamanhoVetor; p++) {
    for (let i = 0; i < t - 1; i++) {
        numComparacoes++;
        console.log('COMPARACAO: ', numComparacoes);
        console.log('T: ', t);
        console.log('Tamanho do vetor: ', tamanhoVetor);
        console.log('');
        if (vetor[i] > vetor[i + 1]) {
            numTrocas++;
            aux = vetor[i + 1];
            vetor[i + 1] = vetor[i];
            vetor[i] = aux;
        }
    }
    t--;
}
for (let i = 0; i < tamanhoVetor; i++) {
    console.log(vetor[i]);
}
console.log('');
console.log(numTrocas, numComparacoes);
