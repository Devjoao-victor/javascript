let pessoa = {nome: 'carlos', idade: 25, apresentar: function() {
    console.log(`meu nome é ${this.nome}, tenho ${this.idade} anos.`)
}}

console.log(pessoa.apresentar())