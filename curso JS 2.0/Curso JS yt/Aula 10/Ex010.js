var agora = new Date()
var hora = agora.getHours()

console.log(`A hora agora é ${hora}`)
if (hora < 12){
    console.log ('Tenha um ótimo dia')
} else if (hora <= 18){
    console.log('Tenha uma ótima tarde')
 } else {
    console.log('Tenha uma boa noite')
}