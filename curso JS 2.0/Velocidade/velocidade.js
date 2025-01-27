let carro1 = prompt("Coloque o nome do carro 1:")
let vel1 = parseFloat(prompt("Coloque a velocidade do carro 1:"))
let carro2= prompt("Coloque o nome do carro 2:")
let vel2= parseFloat(prompt("Coloque a velocidade do carro 2:"))

if (vel1 > vel2) {
    alert(`O Carro ${carro1} cuja velocidade é ${vel1}km/h é mais rapido do que o carro ${carro2} que tem a velocidade ${vel2}km/h`)
}  else if (vel1 < vel2) { 
    alert(`O Carro ${carro1} cuja velocidade é ${vel1}km/h é mais lento do que o carro ${carro2} que tem a velocidade ${vel2}km/h`)
} else{
    alert(`Os carros tem a mesma velocidade`)
}
