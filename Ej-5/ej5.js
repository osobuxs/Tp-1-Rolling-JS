// Escribe un programa de tres líneas que pida un número, pida otro número y
// escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt

var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese un segundo numero"));
document.write(
  `Usted ingreso los numeros ${num1} y ${num2}, la suma de ambos es ${
    num1 + num2
  }`
);
