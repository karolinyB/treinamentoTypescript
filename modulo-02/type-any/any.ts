// ==> Exemplo 01: Tipo Any

const a: any = 888;
const b: any = ['Glaucia'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo any é inferido implicitamente

let frase;

frase = 'Oi, tudo bem?';
console.log(frase);

// ==> Exemplo 03: Quando devemos utilizar o tipo any

const formulario: { [campoFormulario: string]: any } = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
}

console.log(formulario);