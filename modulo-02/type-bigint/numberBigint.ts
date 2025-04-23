// ==> Exemplos: number

let num1: number = 23;
let num2: number = 0x78CF;
let num3: number = 0o5723;
let num4: number = 0b11001;

console.log("Number - Ponto Flutuante... : ", num1);
console.log("Number - Hexadecimal... : ", num2);
console.log("Number - Octal... : ", num3);
console.log("Number - Binário... : ", num4);

console.log(typeof(num1));
console.log(typeof(num2));

// Exemplo bigint
let big1: bigint = 9007127837383938n;
let big2: bigint = 0b10000000000000000000000000000000000000000n;
let big3: bigint = 0x000000000000000000n;
let big4: bigint = 0o4000000000000000000n;

console.log("Bigint...: ", big1);
console.log("Bigint...: ", big2);
console.log("Bigint...: ", big3);
console.log("Bigint...: ", big4);