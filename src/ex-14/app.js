//14. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

// Variables que almacenará el número
let num1 = prompt("Escribe el primer número");
let num2 = prompt("Escribe el segundo número");

//Arrays donde almacenaremos los divisores de cada número
let divisors1 = [];
let divisors2 = [];
let commonDivisors = [];

// Con un for recorremos desde 1 hosta el primer número, cuando encuentres el divisor lo agragar al array

for(let i=1; i <=num1; i++){
    if(num1 % i == 0){
        divisors1.push(i);
    }
}
// Misma operación que la anterior pero con el num2
for(let i=1; i <= num2; i++){
    if(num2 % i == 0){
        divisors2.push(i);
    }
}


// Ahora con un for i recorremos los divisores del primer número y si también es divisor del sugundo lo añadimos a los divisores comunes
for (let i=0; i < divisors1.length; i++){
    if(divisors2.includes(divisors1[i])){
        commonDivisors.push(divisors1[i]);
    }
}

// Imprimimos el resultado
document.getElementById("search").innerHTML = (`Los divisores comunes de los números ${num1} y ${num2} son ${commonDivisors.join(", ")}`);
