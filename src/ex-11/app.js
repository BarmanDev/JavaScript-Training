// 12 Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// Creamos una variable para que el usuario nos escriba el número
let number = prompt("Escribe un número para comprobar si es divisible por 2, 3, 5 o 7 :D");

let divisors = [2, 3, 5, 7]; // Los números por los que queremos comprobar

 // Variable para comprobar si el número es divisible
let isDivisible = false;
// Variable para almacenar el divisor encontrado
let isDivisor; 

// Con un bucle for recorremos todos los divisores y comprobamos si el número es divisible con %
for (let i = 0; i < divisors.length; i++){
    if(number % divisors[i] === 0){
        isDivisible = true;
        isDivisor = divisors[i];
        break;
    }
}

// Imprimimos el resultado
let output = `El número ${number} no es divisible por 2, 3, 5 o 7.`;
if (isDivisible) {
    output = `El número ${number} es divisible por ${isDivisor}.`;
}
document.getElementById("search").innerHTML = output;

