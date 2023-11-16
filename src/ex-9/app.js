//09-Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.


// Creamos una variable para que el usuario nos escriba la frase
let sentence = prompt("Escribe la frase para ver cuantas vocales tiene :D  ");
let vocals = "aeiou"; // letra que buscamos
let count = 0; // contador para las vocales

sentence = sentence.toLowerCase(); // convertirmos a lowercase para que sea siempre minusculas

// Con un for i recorremos todo el string y cuando encuentre una vocal incrementará el contador
for (let i = 0; i < sentence.length; i++){
    if(vocals.includes(sentence[i])){
        count++;
    }
}

// Mostramos el resultado
document.getElementById("search").innerHTML = (`En la frase "${sentence}" encontré un total de ${count} vocales`);

