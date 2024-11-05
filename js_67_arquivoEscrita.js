const fs = require('fs')
const produto={
    nome: 'notebook',
    preco: 3000.00,
    desconto: 0.1
}
fs.writeFile(__dirname +'/arquivoGerado.json',JSON.stringify(produto),erro=>{
    console.log(erro||'arquivo gerado')
    /*o objeto será convertido para o formato JSON*/
})
console.log(__dirname)