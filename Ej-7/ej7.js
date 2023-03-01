// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
// los tres
var numero1 = prompt("Introduce el primer número");
var numero2 = prompt("Introduce el segundo número");
var numero3 = prompt("Introduce el tercer número");
document.write(
  `Los numeros ingresados son: ${numero1} ,${numero2} y ${numero3}\n`
);

if (numero1 > numero2 && numero1 > numero3) {
  alert(`El número mayor es: ${numero1}`);
  document.write(`El número mayor es: ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
  alert(`El número mayor es: ${numero2}`);
  document.write(`El número mayor es: ${numero2}`);
} else if (numero3 > numero1 && numero3 > numero2) {
  alert(`El número mayor es: ${numero3}`);
  document.write(`El número mayor es: ${numero3}`);
} else {
  alert("Los números son iguales");
}
