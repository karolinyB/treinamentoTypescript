
// ==> Variáveis [Type Annotations]
let nome: string = "Ana Karoliny";
console.log(nome);

// ==> Arrays [ Type Annotations ]
let animais: string[] = ['Riany', 'Girafa', 'Panda', 'Zebra'];
console.log(animais);

// ==> Objetos [ Type Annotations ]
let carro: {
    nome: string,
    ano: number,
    preco: number,
    cor: string,
}

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 8000, cor: 'preto' }
console.log(carro);

// ==> Functions [ Type Annotation ]
function multNumbers(num1: number, num2: number)
{
    return num1 * num2;
}

console.log(multNumbers(10, 10));