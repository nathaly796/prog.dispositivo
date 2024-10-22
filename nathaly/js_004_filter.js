const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
]

 const e = (vetor) =>vetor.eletronico
 const precoAlto = x=> x .preco>1000
 console.log(produtos.filter(e ))
  

 const valor = p => p.preco
 const comissao = vetor  => vetor.preco 
 const eletronico = p => !p.eletronico

 console.log(produtos.map(comissao))