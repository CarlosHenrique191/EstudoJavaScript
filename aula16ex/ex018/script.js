var carrinho = []
//atalho div2
var div2 = window.document.getElementById('div2')
// Não sei porque mas precisa ser fora da funcao
soma = 0
function adicionarItem() {
    //selnum foi criada como uma variavel global
    selnum = window.document.getElementById('selnum')
    var num = window.document.getElementById('num')
    var selitem = window.document.createElement('option')
    let n = Number(num.value)
    let verCar = '' 
    maior = 0
    menor = 0
    if (n < 1 || n > 100){
        return alert('Voce não seguiu as instruções')
    }
    for (let i=0;i<=carrinho.length ;i++) {
        if (n == carrinho[i]) {
            verCar = 'ERRO'
            break
        }
        // Espaço para criar estatisticas
        // Maior e menor
        if (carrinho.length === 0) {
            maior = n
            menor = n
        }else if (n > maior) {
            maior = n
        }else if (n < menor ) {
            menor = n
        }
    }
    if (verCar === 'ERRO') {
        alert('(erro) esse valor ja foi colocado')
    }else{
        // Soma
        soma += n
        carrinho.push(n)
        selitem.text = `Valor ${n} adicionado`
        selnum.appendChild(selitem)
    }
}
function finalizar() {
    //media
    let media = soma / carrinho.length
    if(carrinho.length == 0){
        alert('nada foi selecionado')
    }else if(carrinho.length == 1){
        div2.innerHTML = `O valor selecionado foi ${carrinho}`
    }else if(carrinho.length > 1){
        div2.innerHTML = `O maior valor ${maior}`
        div2.innerHTML += `<br>O menor valor ${menor}`
        div2.innerHTML += `<br>A soma dos valores é ${soma}`
        div2.innerHTML += `<br>A media dos valores é ${media.toFixed(2)}`
    }

}
//linpando Vetor
function limpar() {
    selnum.innerHTML = ''
    carrinho.length = 0
    maior = 0
    div2.innerHTML = ``
}