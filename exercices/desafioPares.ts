// Tipos de entradas nos objetos
// 1ª números
// 2º strings
// 3º vetores
// 4º objetos

type Estrutura = {
  [key: string]: string | number | string[] | object | number[];
};

const estrutura: Estrutura = {
  a: [2, 3, [4, { b: 6, c: "texto", d: [8, [10]] }]],
  b: [28, 29],
  e: { f: 11, g: [12, { h: 14 }], i: "não conte" },
  j: 12,
  k: "string",
};

let temp: string;
let est: string | number | string[] | object | number[];
// Conta todos os elementos contidos na estrutura
let contadorObject: number = Object.keys(estrutura).length;

// Guarda o nome de cada elemento do objeto
let nameObject: Array<string> = Object.keys(estrutura);
let count: number = 0;
let pares: number[] = [];
let i: number = -1;


//console.log(estrutura[temp]);

function coletarPares(contador: number) {

  // Condição de parada da função recursiva
  if (contador == contadorObject) {
    return;
  }

  temp    = nameObject[contador];
  est  = estrutura[temp];

  if (typeof est === 'object') {
    if(Array.isArray(est))
    {
        console.log(est);
    }
    else {
        console.log(est);
    }
  }
  else if(typeof est === 'number') {
   if(est % 2 == 0) {
    pares[++i] = est;
    console.log(`${est} é par`);
   }
  }
  

  // Invoke
  coletarPares(++contador);
}

coletarPares(count);

console.log(pares[0]);