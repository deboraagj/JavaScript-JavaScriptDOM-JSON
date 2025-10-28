// UTILIZANDO O ASYNC AWAIT

const loja = "https://raw.githubusercontent.com/miqueiassousa/irineu-store/refs/heads/main/eletronicos.json";

async function buscarDadosComAsyncAwait(){
    try{
        const resposta = await fetch(loja);
        const dados = await resposta.json();

        const item = dados;

        console.log("item:", item.Notebook[0].Tipo);   
    }
    catch(erro){
        console.log("Erro ao carregar os dados", erro)
    }
}

buscarDadosComAsyncAwait();