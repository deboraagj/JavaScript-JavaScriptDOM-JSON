// // FUNÇÕES
// console.log("===FUNÇÕES===");

// // // Função Tradicional
// function saudacao(nome) {
//     return "Olá " + nome + " ! ";
// }
// console.log(saudacao("Miquéias"));

// // // Template String Interpolação de variaveis com crase
// function saudacaoTemplate(nome, sobrenome) {
//     return `Olá, ${nome} ${sobrenome} !`;
// }
// console.log(saudacaoTemplate("Maria", "Santos"));

// // ARROW FUNCTION 

// // // Função tradicional de somar
// function somar(x, y) {
//     return x + y;
// }
// console.log(somar(10, 90));

// // // Arrow Function 
// const somarX = (x, y) => {
//     return x + y;
// }
// console.log(somarX(30, 50));

// const somarArrow = (x, y) => x + y;
// console.log(somarArrow(20, 43))

// // FUNCÕES NATIVAS PARA INTERAÇÃO COM O USUÁRIO //

// // alert -> Mensagem Simples
// function ola() { alert("Olá Mundo") }

// // prompt -> Entrada de dados
// function entrada() { prompt("Digite seu nome", "Nome") };
// entrada();

// // confirm -> Retorna true ou false
// function confirma() { confirm("Você tem certeza?") }
// confirma();

// const confirma = () => {
//     var r = confirm("Tem certeza disso ?");
//     console.log(r ? "Usuario confirmou" : "Usuário cancelou")
// }
// confirma();

// function entrada() {
//     var r = prompt("Qual fruta deseja incluir ?", "Fruta");
//     console.log(r + " Adicionado")
// }
// entrada();

// // ARRAY

// let frutas = ["Maça", "Uva", "Melancia"];
// console.log(frutas)
// console.log(frutas[0]);
// console.log(frutas.length)

// // map -> Percorre e retorna um novo array
// const frutasMaiuscula = frutas.map(fruit => fruit.toUpperCase());
// console.log(frutasMaiuscula);

// // spread(...) Acrescenta itens no array
// const frutasSpread = [...frutas, "Morango", "Ameixa"];
// console.log(frutasSpread);

// // indexOf -> Retornas índice de um item
// console.log(frutas.indexOf("Melancia"))

// // Formas simples de percorrer um array
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
//     document.write(" - " + frutas[i] + " </br> ");

// }

// // for each
// frutas.forEach((valor, indice) => {
//     console.log(`Ídice: ${indice}, Valor: ${valor}`)
// });
// let frutas = ["Maça", "Uva", "Melancia"];
// function inverterArray(array) { return array.slice().reverse(); }
// console.log(inverterArray(frutas))

// // Obj -> Chave e valor
// let objetoPessoa = {
//     nome: "Miquéias",
//     idade: "98",
//     cep: "9091234",
//     cidade: "Conquista",
//     cpf: 12341234
// }

// console.log(objetoPessoa.cep)

// for (let propriedade in objetoPessoa) {
//     console.log(`${propriedade} - ${objetoPessoa[propriedade]}`)
// }

// Objeto aninhado
let aluno = {
    nome: 'Chico',
    cidade: 'Conquista',
    olhos: ['preto', 'verde'],
    caracteristicas: { peso: 80, altura: 1.72 },
    oi() { return 'Estuda no SENAI'; }
};

console.log("Nome:" + aluno.nome)
console.log("Cidade: " + aluno.cidade);
console.log("Olhos: " + aluno.olhos[0]);
console.log("Peso: " + aluno.caracteristicas.peso);
console.log("Altura: " + aluno.caracteristicas.altura);

