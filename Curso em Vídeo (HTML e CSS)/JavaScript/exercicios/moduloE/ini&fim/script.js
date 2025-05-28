function contar() {
    var inicio = document.getElementById('inici').value;
    var fim = document.getElementById('fi').value;
    var passo = document.getElementById('pass').value;
    var res = document.querySelector('div#res');

    // Converting values to numbers
    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    // Checking if any field is empty
    if (inicio === "" || fim === "" || passo === "" || passo <= 0) {
        alert('Tente novamente: todos os campos devem ser preenchidos e o passo deve ser maior que 0');
        } else {
            res.innerHTML = "<p>Contando:</p>";
            if (inicio > fim) {
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449}`;
            }
        } else {
            res.innerHTML = "<p>Contando:</p>";
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1F449}`;
            }
            
        } 
         res.innerHTML += `\u{1F3C1}`
    }
}


