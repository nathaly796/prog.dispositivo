require('./global')

console.log(meuApp.exemplo())

// poblema: o valor global pode ser mudado
meuApp.nome = ' outro valor'
console.log(meuApp.nome)
