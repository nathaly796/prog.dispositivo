// padrão de cadeia de responsabilidades
const passo1 =(contexto, next)=>{
    contexto.valor1 = 'middleware 1'
    next()
}
const passo2 =(contexto, next)=>{
    contexto.valor2 = 'middleware 2'
    next()
}
const passo3 =contexto =>contexto.valor3 = 'middleware 3'
    //next()

const exec = (contexto, ...midds)=>{
    const execPassos = indice => {
        midds && indice < midds.length && 
             midds[indice](contexto, ()=>execPassos(indice+1))
    }
    execPassos(0)
}
/* criando uma situação para fazer a chamada 
passando os contextos*/
const ctx = {}
exec(ctx, passo1, passo2, passo3)
//exec(ctx, passo2, passo1, passo3)
//exec(ctx, passo3, passo2, passo1) só executa o passo3 porque não tem next
console.log(ctx)