function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
    this.saudacao = function() {
        console.log(`${this.nome} olá, tudo bem?`)
    }
}

function Funcionario (nome, idade, salario, cargo) {
    this.salario = salario
    this.cargo = cargo

    Pessoa.call(this, nome, idade)
}

function TimeDeFutebol (time, nome, idade) {
    this.time = time
    Pessoa.call(this, nome, idade)
}

const joao = new Pessoa('Diego', 29)
pessoa1.saudacao()
const vinicius = new Funcionario('Pazzini', 25, 5000, 'Dev front end')
console.log(vinicius)
const mike = new TimeDeFutebol('Grêmio', 'Diogo', 26)
console.log(TimeDeFutebol)
