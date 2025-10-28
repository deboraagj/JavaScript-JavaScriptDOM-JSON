
// window.onload = function (){
//     let titulo = document.querySelector("h1");
//         titulo.innerText = "SENAI" 

//     let segundoParagrafo = document.querySelector("p")[1];
        
//     if(segundoParagrafo){
//         segundoParagrafo.style.color = "blue";
//     }

//     let todosParagrafos = document.querySelectorAll("p")[0];
//         todosParagrafos.style.color = "green";
//         console.log(todosParagrafos);
// }

// EXECUTANDO CÓDIGO AO CLICAR NO BOTÃO

// document.getElementById('botao').addEventListener('click', function(){
//     let titulo = document.querySelector("h1");
//     titulo.innerText = "Desenvolvimento de Sistemas";
// })

// MUDANDO TEXTO COM O ONCLICK

// const mudarTexto = () =>{
//     let titulo = document.querySelector("h1");
//     titulo.innerText = "Jovem Aprendiz";

//     return;
// }

const minhaLista = document.querySelector("#minhaLista");
const ul = minhaLista.querySelector("ul");
console.log(ul.children);
console.log(ul.innerText);
console.log(ul.innerHTML);


let novoItem = () => {
    // ul.innerHTML += "<li>Harpa</li>";

    let add = document.createElement('li');
    add.innerHTML = ("<b>Harpa</b>");
    ul.appendChild(add);
}




