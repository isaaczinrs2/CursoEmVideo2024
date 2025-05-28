function gerar(){
    var numero = document.getElementById('num').value
    var res = document.querySelector('div#res')
    numero = Number(numero)
    
    if (numero === "" || isNaN(numero)) {
        alert('Tente novamente')
    } else {
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
        var multi = numero * c
        res.innerHTML += `<p>${numero} x ${c} = ${multi} </p>`
    }

}
}