// SELECIONAR TODOS OS ITENS DA CLASSE "PRODUTO"
const produtos = document.querySelectorAll('.produto');
// SELECIONAR O ELEMENTO DO TOTAL
const totalElement = document.getElementById('total');

// FUNÇÃO PARA ATUALIZAR O TOTAL

function upadateTotal() {
    let total = 0;
    // FOR EACH PARA PERCORRER CADA PRODUTO
    produtos.forEach(produto => {
        // PEGAR O PREÇO E REMOVER O "R$" E ESPAÇOS
        const precoTexto = produto.querySelector('.price').textContent.replace('R$', '').trim();
        // CONVERTER O TEXTO DO PREÇO PARA NÚMERO
        const preco = parseFloat(precoTexto);
        // PEGAR A QUANTIDADE E CONVERTER PARA NÚMERO INTEIRO
        const quantidade = parseInt(produto.querySelector('.quantity').value) || 0;
        // CALCULAR O TOTAL
        total += (preco * quantidade);
    });

    // ATUALIZAR O ELEMENTO DO TOTAL COM O VALOR FORMATADO
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// ADICIONAR EVENT LISTENER PARA CADA INPUT DE QUANTIDADE
document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', upadateTotal);
});

// CHAMAR A FUNÇÃO PARA ATUALIZAR O TOTAL INICIALMENTE
upadateTotal();
