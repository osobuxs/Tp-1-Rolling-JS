/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 */
var numero = prompt("Introduce un número");
if (numero == 1 || numero == 0) {
  alert(`el numero ${numero} no es divisible por 2, 3, 5, 7`);
} else if (numero % 2 == 0) {
  alert(`el numero ${numero} es divisible por 2`);
} else if (numero % 3 == 0) {
  alert(`el numero ${numero} es divisible por 3`);
} else if (numero % 5 == 0) {
  alert(`el numero ${numero} es divisible por 5`);
} else if (numero % 7 == 0) {
  alert(`el numero ${numero} es divisible por 7`);
}
