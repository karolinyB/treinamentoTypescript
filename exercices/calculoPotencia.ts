let num: number = 5;
let expo: number = 3;

function calculoPotencia(numero: number, expoente: number): number {

    if (expoente === 0) {
        return 1;
    }

    return numero * calculoPotencia(numero, --expoente);
}

console.log(calculoPotencia(num, expo));
