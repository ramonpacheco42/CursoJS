/* Primeiro testa depois executa o bloco 
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}*/

/* Primeiro executa depois testa */

var c = 1

do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

