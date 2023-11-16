// 12. Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

// Creamos una variable para que el usuario nos escriba el número
let number = prompt("Escribe un número para comprobar si es divisible por 2, 3, 5 o 7 :D");

let divisors = [2, 3, 5, 7]; // Los números por los que queremos comprobar

// Variable para almacenar los divisores encontrados

boxDivisors = [];

// Con un bucle for recorremos todos los divisores y comprobamos si el número es divisible con %
for (let i = 0; i < divisors.length; i++){
    if(number % divisors[i] === 0){
        boxDivisors.push(divisors[i]); 
    }
}

// Imprimimos el resultado
let output = `El número ${number} no es divisible por 2, 3, 5 o 7.`;

// Si la variable boxDivisor tiene algun elemento
if (boxDivisors.length > 0) {
    output = `El número ${number} es dividible por ${boxDivisors.join(", ")}.`; //.join une todo el array en una cadena
}

// Mostramos el resultado
document.getElementById("search").innerHTML = output;

