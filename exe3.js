var compra = 0;
var venda = 0;
var diaCompra = 0;
var diaVenda = 0;
var insert = [];
var tamanho = prompt("Digite o tamanho do array: ");

for (var j = 0; j < tamanho; j++) {
  var numero = prompt("Digite o numero:");
  insert.push(numero);
}

for (var i = 0; i < insert.length; i++) {
  if (insert[i] == Math.min.apply(Math, insert)) {
    diaCompra = i + 1;
    compra = insert[i];
    i = diaCompra;
  } else if (i + 1 < tamanho) {
    if (insert[i] > insert[i + 1]) {
      if (compra > 0) {
        venda = insert[i];
        diaVenda = i + 1;
      }
    }
  }
}
// alert(venda - compra);
if (venda - compra > 0) 
  alert(venda + " - " + compra);
else alert(0);
