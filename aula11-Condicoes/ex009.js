var pais = 'Brasil'
var nacionalidade
if (pais.toUpperCase() == 'BRASIL') {
    nacionalidade = 'Brasileiro(a)'
}else{
    nacionalidade = 'Estrangeiro(a)'
}
console.log(`Vivendo em ${pais}`)
console.log(`Sua nacionalidade é : ${nacionalidade}`)