/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

const indice = 13;
let soma = 0;
let k = 0;

for (k; k < indice; k++) {
  soma += k;
}

console.log(`O valor da variável soma é ${soma}`);
