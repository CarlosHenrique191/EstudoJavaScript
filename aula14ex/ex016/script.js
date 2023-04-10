function verificar(){
    div2 = window.document.getElementById("div2")
    inicio = window.document.getElementById("numInicio")
    fim = window.document.getElementById("numFim")
    passo = window.document.getElementById("numPasso")
    div2.innerHTML = "Contagem<br>"
    npasso = Number(passo.value)
    if (npasso == 0) {
        npasso = 1
        alert('O valor de passo não pode ser 0, por isso sera considerado 1')
    }
    if (inicio.value == fim.value){
        div2.innerHTML = "Impossivel contar, pois o inicio é igual ao fim"
    }else if (Number(fim.value) > Number(inicio.value)){
        // Contagem crescente
        for(let n=Number(inicio.value);n<=Number(fim.value);n+= npasso){
            div2.innerHTML += n + "\u{1F449}"
        }
        div2.innerHTML += "\u{1F3C1}"
    }else if (Number(fim.value) < Number(inicio.value)){
        // Contagem decrescente
        for(let n=Number(inicio.value);n>=Number(fim.value);n-= npasso){
            div2.innerHTML += n + "\u{1F449}"
        }
        div2.innerHTML += "\u{1F3C1}"
    }
    
}
