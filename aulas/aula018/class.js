class animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    aprensetar() {
        console.log(`Eu sou o ${this.nome} e eu sou um ${this.tipo}`)
    }
}

let cachorro = new animal ('dymas', 'rato')

cachorro.aprensetar();