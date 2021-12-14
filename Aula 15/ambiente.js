let num = [5,8,2,9,3]
num[5] = 10
num.push(22)

console.log(`Nosso vetor é o ${num}`)
console.log(`O veotr tem ${num.length} posições`)
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
for(let pos in num) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}