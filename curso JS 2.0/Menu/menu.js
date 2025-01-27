
let opcao = ""

do { 
    opcao = prompt("Seja bem vindo\n" +  
    "Por favor, escolha uma das opçoes abaixo:" +
    "\n(1) Opção" +
    "\n(2) Opção" +
    "\n(3) Opção" +
    "\n(4) Opção" +
    "\n(5) Encerramento" 
    )

    switch (opcao) {
        case "1":
        alert("Voce escolheu a opção 1") 
        break
        case "2":
        alert("Voce escolheu a opção 2") 
        break
        case "3":
        alert("Voce escolheu a opção 3") 
        break
        case "4":
        alert("Voce escolheu a opção 4") 
        break
        case "5":
        alert("Voce escolheu a opção 5, de encerramento")
        alert("Encerrando...") 
        break
        default:
            alert("Opção invalida, tente novamente")
    }
  
} while (opcao !== "5");
