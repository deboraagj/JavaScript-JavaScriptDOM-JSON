// 1 - Imprimir números de 1 até 10 usando um loop while, for e do-while

let number1 = 0;

for (number1 = 0; number1 <= 10; number1++) {
    console.log("for " + number1);
}

console.log("");

// WHILE

let number2 = 0;

while (number2 <= 10) {
    console.log("while " + number2);
    number2++;
}

console.log("");

// DO WHILE

let number3 = 0;

do{
    console.log("do while " + number3);
    number3++;
}while(number3 <= 10);


// 2 - Verificar se um número é par ou ímpar

let number4 = 5;

if(number4%2==0){
    console.log("O número é par");
} else{
    console.log("O número é ímpar")
}

//Converter real para dollar

let real = 10;

console.log("2 dólares são: " + real*0.19);

// Criar um programa em JavaScript que utilize operador switch para determinar exibir o dia da semana

let dia = 1;

switch(dia){
    case 1:
        console.log("Domingo");
    break;

    case 2:
        console.log("Segunda");
    break;

    case 3:
        console.log("Terça");
    break;

    case 4:
        console.log("Quarta");
    break;

    case 5:
        console.log("Quinta");
    break;

    case 6:
        console.log("Sexta");
    break;

    case 7:
        console.log("Sábado");
    break;
}

// Crie um programa que leia o mês do ano exiba o número correspondente ao mês:

let mes = 1;

switch(mes){
    case 1:
        console.log("Janeiro");
    break;

    case 2:
        console.log("Fevereiro");
    break;

    case 3:
        console.log("Março");
    break;

    case 4:
        console.log("Abril");
    break;

    case 5:
        console.log("Maio");
    break;

    case 6:
        console.log("Junho");
    break;

    case 7:
        console.log("Julho");
    break;

    case 8:
        console.log("Agosto");
    break;

    case 9:
        console.log("Setembro");
    break;

    case 10:
        console.log("Outubro");
    break;

    case 11:
        console.log("Novembro");
    break;

    case 12:
        console.log("Dezembro");
    break;
}

// Calcula o salário baseado no número de horas trabalhadas


let horas = 61;
let salarioHora = 10;
let salario;

if(horas <= 40){
    salario = salarioHora*horas;

} else if(horas > 40 && horas < 60){
    salario = 400 + horas*15;
}else{
    salario = 400 + (19*20) + horas*25;
}

console.log(salario);


