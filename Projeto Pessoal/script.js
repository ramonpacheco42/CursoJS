function num(n1) {
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + n1;
}

function clean() {
    document.getElementById('res').innerHTML = ''
}

function backspace() {
    let res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calcular() {
    let res = document.getElementById('res').innerHTML;
    if(res) {
        document.getElementById('res').innerHTML = eval(res)
    } else {
        document.getElementById('res').innerHTML = 'ERROR!!!'
    }
}

function teste() {
    let res = document.getElementById('res').innerHTML;
    if(res.length > 10) {
        document.getElementById('res').innerHTML = res.substring(0, res.length -1)
    }
}