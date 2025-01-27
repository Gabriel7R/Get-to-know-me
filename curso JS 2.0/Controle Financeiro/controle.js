let quantidadeInicial = parseFloat(prompt ("Qual é a quantidade inicial de dinheiro?"))
let opcao = ''

do {
    opção = prompt("Saldo disponivel: R$" +  quantidadeInicial + 
    "\n 1 - Deseja adicionar mais dinheiro? " +
    "\n 2 - Deseja retirar dinheiro?" + 
    "\n 3 - Sair"
 )

switch (opcao){
    case 1:
       quantidadeInicial += prompt("Qual valor deseja adicionar a conta?")
        break
    case 2: 
       quantidadeInicial -= prompt("Qual valor deseja retirar da conta?")
        break
    case 3:
        alert("Aguarde um momento...")    
        break
        default:
            alert("Opção invalida, tente novamente")
}


} while (opcao == "1" || opcao == "2" )