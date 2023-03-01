// Escribe un programa que pida dos números y escriba en la pantalla cual es el
// mayor.
var numero1 = prompt("Introduce el primer número");
var numero2 = prompt("Introduce el segundo número");
document.write(`Los numeros ingresados son: ${numero1} y ${numero2}\n`);
if (numero1 > numero2) {
  alert(`El número mayor es: ${numero1}`);
  document.write(`El número mayor es: ${numero1}`);
} else if (numero1 < numero2) {
  alert(`El número mayor es: ${numero2}`);
  document.write(`El número mayor es: ${numero2}`);
} else {
  alert("Los números son iguales");
  document.write("\nLos números son iguales");
}
