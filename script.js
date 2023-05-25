
/*
document -> HTML

getElementById -> Trás UM elemento pelo ID
- const input = document.getElementById ("main-input")
getElmentByClassName -> Trás TODOS os elementos com essa classe
- const elements = document.getElementsByClassName (paragraph-js)
getElementByTagName -> Trás TODOS os elementos com essa TAG
- const elements = document.getElementsByTagName ("h1")
getElementByName -> Trás TODOS os elementos com esse Name
- É usado em formulário

quetySelector -> Trás UM elemento, o PRIMEIRO que encontrar
const elements = document.querySelector ("p") .classe #id
querySelectorAll -> Trás TODOS os elementos que encontrar
traz a familia inteira

Alterando e acessando textos

textContent -> Pega todo o conteúdo
innerText -> Pega APENAS o texto
innerHTML -> Permite adicionar HTML e texto

*/
const element = document.querySelector (".paragraph-js")


console.log (element.textContent) // SÓ HTML
console.log (element.innerText) //LEVA EM CONTA 0 CSS
console.log (element.innerHTML) //TRÁS TUDO