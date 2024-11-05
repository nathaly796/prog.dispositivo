const fs = require('fs')

const caminho = __dirname +'/js_66_arquivo.json'
//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo )
    console.log(`${config.db.host}: ${config.db.port}`)
})


//direto no arquivo
const arquivo = require('./funcionarios.json')
console.log(arquivo.db)

// de dentro de um diretório
fs.readdir(__dirname, (err, arquivos)=>{
    console.log('Conteúdos da pasts')
    console.log(arquivos)
})
