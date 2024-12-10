const eletronicos = produtos.filter(produto => produto.eletronico);
console.log(eletronicos);
[
    { "nome": "notebook", "preco": 6000, "eletronico": true },
    { "nome": "computador", "preco": 4500, "eletronico": true },
    { "nome": "mouser", "preco": 75, "eletronico": true }
  ]
  const caros = produtos.filter(produto => produto.preco > 1000);
console.log(caro);

[
    { "nome": "notebook", "preco": 6000, "eletronico": true },
    { "nome": "computador", "preco": 4500, "eletronico": true },
    { "nome": "Cadeira Gamer", "preco": 1775, "eletronico": false }
  ]
  const comissao = produtos.map(produto => {
    produto.comissao = produto.preco > 1500 ? produto.preco * 0.03 : produto.preco * 0.06;
    return produto;
  });
  console.log(comissao);

[
    { "nome": "notebook", "preco": 6000, "eletronico": true, "comissao": 180 },
    { "nome": "computador", "preco": 4500, "eletronico": true, "comissao": 135 },
    { "nome": "teclado", "preco": 100, "eletronico": false, "comissao": 6 },
    { "nome": "mouser", "preco": 75, "eletronico": true, "comissao": 4.5 },
    { "nome": "Cadeira Gamer", "preco": 1775, "eletronico": false, "comissao": 106.5 }
  ]