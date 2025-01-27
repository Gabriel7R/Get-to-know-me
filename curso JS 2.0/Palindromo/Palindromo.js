let palavra = prompt("Coloque uma palavra para verificação:")
let palavraInvertida = ""

for(let i = palavra.length -1; i >=0; i--){
  palavraInvertida += palavra[i]
}
if(palavra===palavraInvertida){
  alert(palavra + " " + "é um palindromo!")
}
else {
  alert(palavra + "são palavras diferentes\n\n" +
 palavra + "!==" + palavraInvertida)
}