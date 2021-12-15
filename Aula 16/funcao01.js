function parimpar(numero) {
    if(numero%2 == 0){
        return 'É par'
    } else {
        return 'É impar'
    }
}

let par = parimpar(4)
console.log(par)