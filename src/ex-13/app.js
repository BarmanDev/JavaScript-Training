//13. Escribir un programa que escriba en pantalla los divisores de un número dado.

// Variable que almacenará el número
let number = prompt("Escribe un número para ver los divisores que tiene :O");
// Array de los divisores
let divisors = [];

// Con un for recorremos desde 1 hasta el número y cuando encuentre un divisor lo añade al array divisors
for (let i=1; i <= number; i++){
    if(number % i == 0){
        divisors.push(i);
    }
}

// Mostramos el resultado
document.getElementById("search").innerHTML = (`Los divisores del número ${number} son ${divisors.join(", ")}`);