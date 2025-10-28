/*
* ================================
* ATIVIDADE
* ================================
*
* Sistema de Cadastro de Alunos em JavaScript
*
* Criar um sistema em JavaScript que simula o cadastro de alunos de uma escola,
* utilizando variáveis, funções, objetos, arrays, condicionais e loops.
*
* O sistema deve permitir:
* - Cadastrar alunos com as informações DE nome, idade, curso e status se é adulto ou menor
* - Armazenar os alunos em um array.
* - Calcular a média de idades dos alunos.
* - Pesquisar um aluno pelo nome
*
* Criar as seguintes funções:
* - criarAluno()
* - adicionarAluno()
* - listarAlunos()
* - mediaIdades()
*
*/


// FUNÇÃO PARA ADICICIONAR ALUNOS

const alunos = [];

function adicionarAluno(){

    let nome = prompt("DIGITE SE NOME:");
    let idade = prompt("DIGITE SUA IDADE:");
    let curso = prompt("DIGITE SEU CURSO:");

    const registroAluno = [nome, idade, curso];
    alunos.push(registroAluno);

}

do{

    adicionarAluno();
    resposta = prompt("DESEJA CONTINUAR?");

}while(resposta == 's');

console.log(alunos);



