// 6- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// Cramos 3 variables para pedir al usuario los números

let num1 = prompt("Escribe el primer número ");
let num2 = prompt("Escribe el segundo número ");
let num3 = prompt("Escribe el tercer número ");

// Parseamos los string del usuario a float 
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

function compareTo(num1, num2, num3) {
    // Si num1 es mayor o igual a num2 y num1 es mayor o igual a num3
    if (num1 >= num2 && num1 >= num3) {
        document.getElementById("compare-to").innerHTML = `Entre el ${num1}, ${num2} y ${num3} es mayor el ${num1}`;
    }

    // Si num2 es mayor o igual a num1 y num2 es mayor o igual a num3
    if (num2 >= num1 && num2 >= num3) {
        document.getElementById("compare-to").innerHTML = `Entre el ${num1}, ${num2} y ${num3} es mayor el ${num2}`;
    }

    // Si num3 es mayor o igual a num3 y num2 es mayor o igual a num3 
    if (num3 >= num1 && num3 >= num2) {
        document.getElementById("compare-to").innerHTML = `Entre el ${num1}, ${num2} y ${num3} es mayor el ${num3}`;
    }
}

// Llamamos a la función
compareTo(num1, num2, num3);
