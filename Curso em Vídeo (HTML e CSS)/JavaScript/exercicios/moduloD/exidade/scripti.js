function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
             res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        } else if(fsex[1].checked) {
            genero = 'Mulher'
             res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        }
       res.style.textAlign = 'center'
    }
}