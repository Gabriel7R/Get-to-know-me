let num = document.getElementById("fnum");
let list = document.getElementById("flist");
let res = document.getElementById("res");
let valores =[];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
   lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert("Valor invalido ou ja encontrado na lista");
  }
  num.value = ''
  num.focus()
}
function enviar(){
    if(valores.length == 0){
      window.alert(' Adicione valores antes de finalizar')
    }else {
      let tot = valores.length
      res.innerHTML = ''
      res.innerHTML += ` <p> Ao todo, temos ${tot} números cadastrados. </p>`
      
    }
}