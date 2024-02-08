let totalGeral = 0
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('lista-produtos').innerHTML = ' ';
let produtosNoCarrinho = [];

function adicionar() {
  // pegar elementos
  let produtos = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;

  // pegar valores e nome
  let nome = produtos.split("-")[0];
  let valorUnitario = produtos.split("$")[1];
  let valor = quantidade * valorUnitario

  //adicionar no carro
  let carrinho = document.getElementById('lista-produtos');
  let carrinhoAtualizado = document.getElementById(`${nome}`);
  
  if (quantidade >= 1) {

  // verificar se o produto já esta no carrinho
    if (produtosNoCarrinho.includes(nome)) {

      //pegar qunatidade de produto no carro
      quantidadeNOCarrinho = document.getElementById(`${nome}-${nome}`).textContent;

      // atualizar item no carrinho
      atualizarQuantidade = parseFloat(quantidade) + parseFloat(quantidadeNOCarrinho.split('x')[0]);
      novoValor = atualizarQuantidade * valorUnitario
      carrinhoAtualizado.innerHTML = `<span class="texto-azul"  id = "${nome}-${nome}">${atualizarQuantidade}x</span> ${nome} <span class="texto-azul">R$${novoValor}</span>`;

    } else {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto" id = "${nome}">
        <span class="texto-azul" id = "${nome}-${nome}">${quantidade}x</span> ${nome} <span class="texto-azul">R$${valor}</span>
        </section>`;
        produtosNoCarrinho.push(nome)
    }
  } else {
    alert('Adicione a quantidade de produto');
  }

  //somar valor total
  totalGeral += valor
  let campoTotal = document.getElementById('valor-total')
  campoTotal.textContent = `R$${totalGeral}`
  document.getElementById('quantidade').value = ""
}

function limpar() {
  totalGeral = 0
  document.getElementById('valor-total').innerHTML = 'R$ 0';
  document.getElementById('lista-produtos').innerHTML = ' ';
  produtosNoCarrinho = []
  document.getElementById('quantidade').value = ""

}