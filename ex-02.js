const prompt = require("prompt-sync")();
let request = prompt(
  "Digite um número para verificar se está na sequência de Fibonacci: "
);

const calcularFibonacci = (number) => {
  let fibonacci = [0, 1];

  for (let i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  {
    fibonacci.includes(Number(number))
      ? console.log(`O número ${number} está na sequência de Fibonacci`)
      : console.log(`O número ${number} não está na sequência de Fibonacci`);
  }

  console.log(`Fibonacci: ${fibonacci}`);
};

calcularFibonacci(request);
