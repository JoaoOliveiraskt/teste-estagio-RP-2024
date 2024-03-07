/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const prompt = require("prompt-sync")();

const string = prompt("Digite a string para ser invertida: ");

let stringInvertida = "";

let i = string.length - 1;

const inverterString = (str) => {
  for (i; i >= 0; i--) {
    stringInvertida += str[i];
  }
  console.log(`String invertida: ${stringInvertida}`);
};

inverterString(string);
