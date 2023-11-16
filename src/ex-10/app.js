//10- Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.

// Creamos una variable para que el usuario nos escriba la frase
let sentence = prompt("Escribe la frase para ver cuantas veces aparece cada vocal :D  ");
let vocals = "aeiouáéíóú"; // letra que buscamos incluido acentos

sentence = sentence.toLowerCase(); // convertirmos a lowercase para que sea siempre minusculas
let counts = {}; // contador para las vocales

// Con un for i recorremos todo el string y cuando encuentre una vocal incrementará el contador
for (let i = 0; i < sentence.length; i++){
    if(vocals.includes(sentence[i])){
        if (counts[sentence[i]]) {
            counts[sentence[i]]++;
        } else {
            counts[sentence[i]] = 1;
        }
    }
}

// Recorremos con un for un cada vocal y la imprimimos.
let output = `En la frase "${sentence}" encontré: `;
for (let vocal in counts) {
    output += `${counts[vocal]} '${vocal}', `;
}

// Mostramos el resultado
document.getElementById("search").innerHTML = output ; 


