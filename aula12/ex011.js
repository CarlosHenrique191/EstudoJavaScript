var idade = 24
if (idade < 16) {
    console.log('Menor de idade')
    console.log('Não vota')
}else if (idade < 18 || idade > 65) {
        console.log('voto é opcional')
    }else {
        console.log('Voce é maior de idade')
        console.log('Voto é obrigatorio')
}
