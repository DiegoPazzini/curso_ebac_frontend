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

const Diego = new Pessoa('Diego', 29)
console.log(Diego)
const Pazzini = new Funcionario('Pazzini', 25, 5000, 'Dev front end')
console.log(Pazzini)
const mike = new TimeDeFutebol('Grêmio', 'Mike', 30)
console.log(TimeDeFutebol)
