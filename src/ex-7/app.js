//7- Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

// Creamos una variable para que el usuario nos escriba la frase
let sentence = prompt("Escribe la frase para ver cuantas a tenemos: ");
let searchChar = "a"; // letra que buscamos
let count = 0; // contador para la letra a

sentence = sentence.toLowerCase(); // convertirmos a lowercase para que sea siempre minusculas

// Con un for i recorremos todo el string y cuando encuentre una a incrementará el contador
for (let i = 0; i < sentence.length; i++){
    if(sentence[i] === searchChar){
        count++;
    }
}

// Imprimimos el resultado 
document.getElementById("search").innerHTML = `en la frase ${sentence} encontré un total de ${count} con la letra ${searchChar}`


