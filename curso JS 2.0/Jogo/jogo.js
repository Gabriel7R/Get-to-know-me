let nomeDoPersonagem1 = prompt ("Nome do primeiro personagem:")
let ataque= parseFloat(prompt("Força de ataque:"))

let nomeDoPersonagem2 = prompt("Nome do segundo personagem:")
let vida = parseFloat(prompt ("Quantidade de vida do segundo personagem:"))
let defesa = parseFloat(prompt("Força de defesa o segundo personagem:"))
let escudo = prompt ("Ele possui escudo? (Sim/Não)")

let danoCausado = 0


if( ataque > defesa && escudo === "Não"){
  danoCausado = ataque - defesa
} else if (ataque > defesa && escudo === "Sim"){
    danoCausado = (ataque - defesa) / 2
} 

vida -= danoCausado

alert(nomeDoPersonagem1 + " causou " + danoCausado + " pontos de dano em " + nomeDoPersonagem2)
alert(
  nomeDoPersonagem1 + "\nPoder de ataque: " + ataque + "\n\n" +
  nomeDoPersonagem2 + "\nPontos de vida: " + vida +
  "\nPoder de defesa: " + defesa + "\nPossui escudo: " + escudo
)