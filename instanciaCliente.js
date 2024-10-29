const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')

contadorC =require ('./instanciaNova')
contadorD =require ('./instanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor , contadorB.valor)


contadorC.inc()
contadorC.inc()
console.log(contadorC.valor , contadorB.valor)
