const mult = (a,b) => a * b; //Exercicio 1

const teste = numero =>  //Exercicio 2
    numero > 0
    ? "Positivo"
    : numero === 0
      ? 'Zero'
      : 'Negativo';

const palavra = texto => texto.length; //Exercicio 3
console.log(palavra('macaco'))

const maiormenor = (a,b) => // Exercicio 4
    a > b
    ? 'O primeiro numero é maior'
    : 'O segundo numero é maior';
  
console.log(maiormenor(1, 1))


const area = (a, b, c) => (a * b) / 2; //Exercio 5
console.log(area(2, 2, 5))


