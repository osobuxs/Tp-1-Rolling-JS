// Escribe un programa que pida una frase y escriba las vocales que aparecen
var frase = prompt("Introduce una frase");
var fras = [];
var vocales = "aeiou";
for (var i = 0; i < frase.length; i++) {
  if (vocales.indexOf(frase[i]) != -1) {
    fras.push(frase[i]);
  }
}
document.write(
  `Las vocales que aparecen en la frase: "${frase}" son:  ${fras}`
);

// =======================================================================================
// Sin repetir vocales
// var frase = prompt("Introduce una frase");
// var vocales = "aeiou";
// var vocalesEncontradas = [];
// for (var i = 0; i < frase.length; i++) {
//   if (vocales.indexOf(frase[i]) != -1 && vocalesEncontradas.indexOf(frase[i]) == -1) {
//     vocalesEncontradas.push(frase[i]);
//   }
// }
// alert(vocalesEncontradas);
