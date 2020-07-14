let resultado = [];
let array = [];
let alvo = prompt("Qual e o alvo");
var total = prompt("Digite o tamanho do array:");

for (var i = 0; i < total; i++) {
  var numero = prompt("Digite o numero:");
  array.push(numero);
}
array.sort();

for (var j = 0; j < array.length; j++) {
  if (Number(array[j]) + Number(array[j + 1]) == alvo) {
    alert(Number(array[j]) + Number(array[j + 1]) == alvo);
    resultado.push(j);
    resultado.push(j + 1);
    alert(array[j] + "," + array[j + 1]);
    break;
  }
}
