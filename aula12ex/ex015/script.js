function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value == 0 || fano.value > ano) {
        window.alert('Ano invalido')
    }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'assets/CriancaM.png')
            }else if (idade <  28) {
                img.setAttribute('src', 'assets/JovemM.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'assets/Adulto.png')
            }else{
                img.setAttribute('src', 'assets/Idoso.png')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'assets/CriancaF.png')
            }else if (idade <  28) {
                img.setAttribute('src', 'assets/JovemF.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'assets/Adulta.png')
            }else{
                img.setAttribute('src', 'assets/Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = genero + ' com ' + idade + ' anos<br>'
        res.appendChild(img)
    }
}