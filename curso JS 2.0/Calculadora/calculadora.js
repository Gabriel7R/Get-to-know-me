let numero = prompt("Coloque o numero que voce deseja fazer a tabuada:")
let resultado = ""

for( let fator = 1; fator <= 10; fator++){
  resultado += "->" + numero + " * " + fator + " = " + (numero * fator) + "\n\n" 
} alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)