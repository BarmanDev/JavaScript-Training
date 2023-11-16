// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

//Creamos dos variables para almacenar los números pedidos por promt
let num1 = prompt("Escribe el primer número ");
let num2 = prompt("Escribe el segundo numero ");

// Parseamos las variables de tipo string a float (val
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Cramos la función para sumar dos números por parametreo
function sumNum(num1,num2){
    let result = num1 + num2;
    return result;
}

// LLamamos a la función
let result = sumNum(num1,num2);

// Insertamos el resultado con inner.HTML
document.getElementById("result-sum").innerHTML = `La suma de ${num1} y ${num2} es ${result}`

