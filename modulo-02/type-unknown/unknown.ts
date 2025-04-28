// ==> Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = "Teste 01";
valorVariavel = 23;
valorVariavel = 800000000000000000000n;
valorVariavel = [];
valorVariavel = {};
valorVariavel = true;

console.log(valorVariavel);

// ==> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos

let valor: unknown;

//let valor1: boolean = valor;
//let valor2: any = valor;
//let valor3: any[] = valor;
//let valor4: string = valor;

// ==> Exemplo 03: Diferença entre 'any' vc 'unknown'

let algumaCoisaAny: any = 23.89;
let algumaCoisaUnknown: unknown = 24.89;

console.log(algumaCoisaAny.toFixed());

// A função toFixed, arredonda um número de casas para números decimais. Exemplo: toFixed(2) -> 24,898 será 24.90.
if (typeof algumaCoisaUnknown === "number") {
  console.log(algumaCoisaUnknown.toFixed());
}

