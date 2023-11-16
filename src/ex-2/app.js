// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.


//Selecionamos el elemento del DOM number con id number
const titleSection = document.getElementById('number');


// Creamos un función que pasa por parametro dos número y retornamos la suma de los dos números
function sum(num1, num2){
    result = num1 + num2;

    
// Insertamos con innerHTML el resultado de la función
    titleSection.innerHTML = /* html */ `
        <h1>El resultado de la suma es: ${result}</h1>
    `
}

// llamamos a la función pasando por parametro dos números facilitando la reutilización de código.
sum(3,5);

