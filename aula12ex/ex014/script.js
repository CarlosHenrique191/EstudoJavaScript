
agora = new Date()
hora = agora.getHours()
div1 = window.document.querySelector('div#foto')
div2 = window.document.querySelector('div#textHora')
if (hora > 18 && hora < 6) {
    window.document.body.style.background = 'rgb(66, 30, 107)';
    div1.innerText = '<img id="imagem" src="assets/Noite.png" alt="Foto dia">'
}else if(hora >= 6 && hora < 13) {
    window.document.body.style.background = 'bisque';
    div1.innerHTML = '<img id="imagem" src="assets/Manha.png" alt="Foto dia">'
}else{
    window.document.body.style.background = 'rgb(190, 117, 7)';
    div1.innerHTML = '<img id="imagem" src="assets/Tarde.png" alt="Foto dia">'
}

div2.innerHTML = 'Agora são ' + hora + ' horas'