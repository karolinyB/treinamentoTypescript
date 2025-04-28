// Tipos possíveis dentro da Estrutura: números, strings, arrays, objetos


type Estrutura = {
  [key: string]: string | number | string[] | object | number[];
};

type ElementType = string | number | string[] | object | number[];

const estrutura: Estrutura = {
  a: [2, 3, [4, { b: 6, c: "texto", d: [8, [10]] }]],
  b: [28, 29],
  e: { f: 11, g: [12, { h: 14 }], i: "não conte" },
  j: 12,
  n: {
    a: [{ e: 45, t: [78, 198, [457, 664, 332], 22], p: { oi: 'oi', tchau: 'tchau' } }],
    b: [1, 2, 'string'],
    c: { funcionaria: 'Helena', cargo: 'Developer' },
    d: { s: [[[1, 88888]]], j: { x: { h: [18, 4000, 5, 96] }, y: { k: [90, 100, 102, 104] } } }
  }
};

let pares: number[] = [];


function coletarPares(element: ElementType) {
  if (typeof element === 'object') {
    if (Array.isArray(element)) {
      for (const item of element) {
        coletarPares(item);
      }
    }
    else {
      for (const value of Object.values(element)) {
        coletarPares(value);
      }
    }
  }
  else if (typeof element === 'number') {
    if (element % 2 == 0) {
      pares.push(element);
    }
  }
}

coletarPares(estrutura);
console.log(...pares);