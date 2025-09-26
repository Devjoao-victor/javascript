class produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarInfo() {
        console.log(`O produto ${this.nome} custa $${this.preco}`)
    }
} 

let produto1 = new produto ('banana', '6')
let produto2 = new produto ('maça', '3')
let produto3 = new produto ('uva', '9')

produto1.mostrarInfo();
produto2.mostrarInfo();
produto3.mostrarInfo();