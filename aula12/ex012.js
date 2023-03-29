var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora}`)
if (hora <= 1) {
    console.log('Boa noite')
}else if (hora <= 6) {
    console.log('Boa madrugada')
}else if (hora <= 12) {
    console.log('Bom dia')
}else {
    console.log('Boa tarde')
}