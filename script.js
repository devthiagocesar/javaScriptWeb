
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
querySelectorAll -> Trás TODOS os elementos que encontrar


*/

const elements = document.getElementsByTagName ("h1")
console.log (elements)