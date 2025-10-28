// TIPOS DE VARIÁVEIS

var nome = "Debora"; // pode ser reatribuída e redaclarada
console.log(nome);

let fruta = "Maçã"; // pode ser reatribuída, mas não redaclarada
console.log(fruta);

const carro = "BMW"; // não pode ser alterada (nem redaclarada. nem reatribuída)
console.log(carro);

// OPERADORES

let x = 20;
console.log(x);

x += 10;
console.log(x);

let contador = 1;
console.log("Cont: " + contador);
console.log(++contador); // INCREMENTO
console.log(--contador); // DECREMENTO

// OPERADORES RELACIONAIS

let a = 10;
let b = 5;

console.log(a == b); // IGUALDADE (valor)
console.log(a != b); // DIFERENTE (valor)
console.log(a === b); // IDENTIDADE (tipo de dado e valor)
console.log(a !== b); // NÃO IDENTIDADE (tipo de dado e valor)
console.log(a > b); // MAIOR
console.log(a < b); // MENOR
console.log(a >= b); // MAIOR OU IGUAL
console.log(a <= b); // MENOR OU IGUAL

// CONDICIONAIS

let numero1 = 10;
let numero2 = 20;

if (numero1 > numero2) {
    console.log("Número 1 é maior que Número 2");

}else if(numero1 < numero2) {
    console.log("Número 1 é menor que Número 2");
}else{
    console.log("Número 1 é igual a Número 2");
}
  
let cor = "verde";

switch (cor) {
    case "verde":
        console.log("A cor é verde");
        break;

    case "amarelo":
        console.log("A cor é amarelo");
        break;
        
    default:
        console.log("Cor não encontrada");
        break;     
}

// OPERADOR TERNÁRIO

let idade = 18;     //condição         //true             //false    
let statusIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade"; 
console.log(statusIdade);

// LAÇOS DE REPETIÇÃO

// FOR

let cont = 0;
for (cont = 0; cont <= 10; cont++) {
    console.log("Contador: " + cont);
}

// WHILE

while (cont <= 10) {
    console.log("Contador: " + cont);
    cont++;
}

// DO WHILE

let number = 10;

do{
    console.log(number);
    number--;
}while(number >= 5);

// FUNÇÕES

function ola() {
    console.log("Olá, mundo!");
}

ola();

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 20));

const subtracao = function(n1, n2) {
    return n1 - n2;
}

console.log(subtracao(20, 10));

const multiplicacao = (n1, n2) => n1 * n2;

console.log(multiplicacao(10, 5));  

