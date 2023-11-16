// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Cramos dos variables para preguntar al usuario que numeros quiere comparar
let num1 = prompt("Escribe el primer número ");
let num2 = prompt("Escribe el segundo numero ");

// Parseamos los resultados String a número 
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Creamos la función para comparar dos números por parametro  si es mayor, menor o estrictamente igual 
function compareTo(num1,num2){
    if(num1 < num2){
        document.getElementById("compare-to").innerHTML = ` entre el ${num1} y ${num2} es mayor el ${num2}`;
    }

    if(num1 > num2){
        document.getElementById("compare-to").innerHTML = ` entre el ${num1} y ${num2} el mayor es ${num1}`;
    }

    if (num1 === num2){
        document.getElementById("compare-to").innerHTML = ` entre el ${num1} y ${num2} los dos son iguales`;
    }

}

// Almacenamos el resutaldo llamando a la función
let result = compareTo(num1,num2);

// Insertamos el resultado con innerHTML
document.getElementById("result-sum").innerHTML = `La suma de ${num1} y ${num2} es ${result}`

