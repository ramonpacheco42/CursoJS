
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var min = data.getMinutes()
var hora = data.getHours()
var seg = data.getSeconds()
msg.innerHTML = `Agora são ${hora} Horas ${min} minutos e ${seg} segundos.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#cda997'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#643d52'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#82669b'
}
}