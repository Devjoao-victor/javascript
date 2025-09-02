function conta(a, b, operacao) {
    if (operacao == '+') {
      return a + b
    } else if (operacao == '-') {
      return a - b
    } else if (operacao == '*') {
      return a * b
    } else if (operacao == '/') {
      return a / b
    } else {
      console.log('operador invalido ou nao existente no banco de dados')
    }
  }
  
  let n1 = conta(5, 2, '/')
  console.log(`O resultado da sua operação é ${n1}`)