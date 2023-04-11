function verificar() {
    let numtab = document.getElementById('numTab')
    let seltab = document.getElementById('selTab')
    
    if (Number(numtab.value) == 0) {
        alert('0 é invalido, por favor digite outro numero')
    }else{
        let n = Number(numtab.value)
        seltab.innerHTML = ''
        for(i=1;i<=10;i++) {
            let item = document.createElement('option')
            item.text = n + 'x' + i + '= ' + (n*i)
            seltab.appendChild(item)
        }
    }
}