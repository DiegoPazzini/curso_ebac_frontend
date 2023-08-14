const notasDosAlunos = [
  { nome: 'Pedro', notas: 10 },
  { nome: 'João', notas: 7 },
  { nome: 'Carla', notas: 6 },
  { nome: 'Maria', notas: 5.6 },
  { nome: 'José', notas: 9 },
  { nome: 'Sarah', notas: 5.9 },
  { nome: 'Giovanna', notas: 8.5 },
  { nome: 'Karol', notas: 10 },
  { nome: 'Hugo', notas: 9.2 }
]

const notasMaiorIgualASeis = notasDosAlunos.filter(item => item.notas >= 6)

console.log(notasMaiorIgualASeis)
