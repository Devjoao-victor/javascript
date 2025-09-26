class aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    verificaraprovacao() {
        if (this.nota >= 7) {
            console.log('APROVADO')
        } else {
            console.log('REPROVADO')
        }
    }
}

let aluno1 = new aluno ('jose', 2 )
let aluno2 = new aluno ('anderson', 10)

aluno1.verificaraprovacao()
aluno2.verificaraprovacao()