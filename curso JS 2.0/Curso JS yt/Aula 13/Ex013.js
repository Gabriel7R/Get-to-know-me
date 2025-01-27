let num = [ 7, 14, 56, 3]
num.push(1)
console.log(`O vetor tem exatamente ${num.length} posiçoes` )
console.log (`Qual é o valor de ${num[1]}`)

let pos = num.indexOf(14)
if (pos == -1){
   console.log ( `O valor que voce deseja não foi encontrado!!`) 
}else console.log( `O valor esta na posição ${pos}`)