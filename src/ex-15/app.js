//15. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
// Variables que almacenará el número

// Variable para almacenar el número
let num = prompt("Escribe un número y te digo si es primo o no ")

// Variable para ver si es primo o no 
let isPrime = true;


// si num es estrictamente igual a 1 me lo cambias a false
if (num === 1){
    isPrime = false;
}

// Si num es mayor a 1 comprobamos si el número tiene otros divisores apartede 1 y el mismo
if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
}

//Si es primo
if (isPrime) {
    document.getElementById("search").innerHTML = (`El número ${num} es primo`);
}

// Si no es primo
if (!isPrime) {
    document.getElementById("search").innerHTML = (`El número ${num} no es primo`);
}