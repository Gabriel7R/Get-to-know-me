let baralho = []
let opcao = ""

do{
    opcao = prompt("Cartas do baralho " + baralho.length +
   "\n1.Adicionar uma carta ao baralho\n 2.Retirar uma carta do baralho\n 3.Sair."
     )
  switch (opcao){
    case "1":
     const novaCarta = prompt("Qual carta voce quer adicionar:")
     baralho.push(novaCarta)
     break
     case "2":
        const puxarCarta = baralho.pop()
        if (!puxarCarta){
            alert("Não ha nenhuma carta no baralho")
        }else ("Voce puxou um(a) carta") + puxarCarta
        break
    case "3":
        alert("Saindo...")
break
default:
    alert("Opção invalida!")
  }

}while (opcao !== "3")