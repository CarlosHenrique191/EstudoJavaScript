var num = [ 5, 4, 3]

console.log(num)

// Colocando valor por um indice que antes não existia
num [3] = 2
console.log(num)
// Colocando valor no vetor por .push que vai colocar
// na proxima posição vazia
num.push(7)
console.log(num)

console.log('O vetor tem : ' + num.length + ' posições')
// .sort para ordenar vetor
num.sort()
console.log(num)
// for para percorrer os valores de um vetor
for(let c = 0 ; c < num.length ; c++) {
    console.log(`O valor Armazanado no indice ${c} é ${num[c]}`)
}
// for in usado para vetor e objetos
for(let c in num) {
    console.log(num[c])
}

// .indexOf para buscar valores dentro de um vetor
console.log('O valor 2 esta no indice ' + num.indexOf(2))

let numInd = num.indexOf(6)
if(numInd == -1) {
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor foi encontrado e esta na posição ${numInd}`)
}