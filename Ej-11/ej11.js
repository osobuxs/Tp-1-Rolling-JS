/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (hay
que decir todos por los que es divisible)*/

var numero = prompt("Introduce un numero");
var divisible = "";
if (numero % 2 == 0) {
  divisible += "2 ";
}
if (numero % 3 == 0) {
  divisible += "3 ";
}
if (numero % 5 == 0) {
  divisible += "5 ";
}
if (numero % 7 == 0) {
  divisible += "7 ";
}
if (divisible == "") {
  divisible = "ninguno";
}
alert(`El numero ${numero} es divisible por ${divisible}`);
document.write(`El numero ${numero} es divisible por ${divisible}`);
