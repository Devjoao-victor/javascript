function tchau() { // Exercicio 1
    console.log('tchau')
}

function oi() {
    console.log('oi')
}

function frase(cb) {
    console.log('alguma coisa')
    cb()
}

frase(tchau)
frase(oi)

function somar(a, b) { //Exercicio 2
  return a + b
}

function subtracao(a, b) {
  return a - b
}

function divisao(a, b) {
  return a / b
}

function multiplicar(a, b) {
  return a * b
}

function calculo(a, b, cb){
   return cb(a, b)
}

console.log(calculo(2, 2, subtracao))


function dizeroi() { //Exercicios 3
    return 'ola '
}

function nomes(a, b ,c, cb) {
  console.log(cb() +  a)  
}

nomes('joao', 'dymas', 'pedro', dizeroi)
