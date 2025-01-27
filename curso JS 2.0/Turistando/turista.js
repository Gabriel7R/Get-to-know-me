const nomeDoTurista = prompt("Coloque o seu nome:")
let contagem = 0
let cidades = ''

let cidade = prompt("Voce ja visitou alguma cidade? (sim/não)")


while (cidade == "sim"){
    cidade = prompt("Qual o nome da cidade em que voce visitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    cidade = prompt("Voce visitou mais alguma cidade? (sim/não)")
}

alert(
    "Nome do Turista" + nomeDoTurista + 
    "\nQuantas cidades foram visitadas" + contagem +
    "\nCidades Visitadas" + cidades
)