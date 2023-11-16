//01 Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

//Cramos la constante con el string Hello JavaScript
const title = "Hello JavaScript";

//Selecionamos el elemento del DOM title
const titleSection = document.getElementById('title');


//Creamos una función para insertar el texto con innerHTML
function printTitle(){
    titleSection.innerHTML = /* html */ `
        <h1>${title}</h1>
    `
}

//Llamamos a la función
printTitle();

