function parimp(num) {
    if (num % 2 == 0) {
        return 'par'
    }else{
        return 'impar'
    }
}

console.log('O numero é ' + parimp(5))