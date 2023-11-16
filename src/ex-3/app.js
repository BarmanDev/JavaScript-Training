// -3 Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola" <nombre-de-usuario>”

//Selecionamos en constantes los elementos del DOM youtName y inputName
const titleSection = document.getElementById('yourName');
const inputName = document.getElementById('inputName');

// Cramos una función para que nos pregunte por promt nuestro nombre
function sendNamePrompt(){
    let personName = prompt("¿Cómo te llamas?");
    
// Insertamos con innerHTML el resultado de la función
titleSection.innerHTML = /* html */ `
        <h1> Hola ${personName}</h1>
    `
}

// Cramos una función que almacena de nuestro input el nombre
function inputNameSend(){
    // Almacenamos en variables el nombre y otra para el resultado
    let personName = document.getElementById("inputName").value;
    let result = document.getElementById("result");


  // Insertamos con innerHTML el resultado de la función
    result.innerHTML = /* html */ `
    
        <h1>hola ${personName}</h1>
    
    ` 
}

// sendNamePrompt();
// Llamamos a la función
inputName();

