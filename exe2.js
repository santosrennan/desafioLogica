function sequencia() {
  var s = prompt("digite a sequencia");
  if (s == "") {
    return "SIM";
  }
  pilha = [];

  var c; //caracter
  for (var i = 0; i < s.length; i++) {
    c = s[i];

    if (c == "(") 
    pilha.push(c);
    else if (c == "{") 
    pilha.push(c);
    else if (c == "[") 
    pilha.push(c);
    else if (c == ")")
      if (pilha.length == 0) 
      return "NÃO";
      else if (pilha[0] == "(") 
      pilha.pop();
      else return "NÃO";
    else if (c == "}")
      if (pilha.length == 0) 
      return "NÃO";
      else if (pilha[0] == "{") 
      pilha.pop();
      else return "NÃO";
    else if (c == "]")
      if (pilha.length == 0) 
      return "NÃO";
      else if (pilha[0] == "[") 
      pilha.pop();
      else return "NÃO";
  }
  // alert(pilha.length)
  if (pilha.length == 0) {
    return "SIM";
  }
  return "NÃO";
}
alert(sequencia());
