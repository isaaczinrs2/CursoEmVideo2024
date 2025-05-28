let numerosAdicionados = [];

function adicionar() {
    let num = document.getElementById('number');
    let sel = document.getElementById('selnum');

    if (num.value.length == 0 || num.value <= 0 || num.value > 100) {
        alert('O número deve estar entre 1 e 100!');
    } else {
        let n = Number(num.value);
        
        if (numerosAdicionados.indexOf(n) !== -1) {
            alert('Número já adicionado!');
        } else {
            numerosAdicionados.push(n);
            let item = document.createElement('option');
            item.text = `Valor ${n} adicionado`;
            sel.appendChild(item);
        }

        num.value = '';
        num.focus();
    }
}

function finalizar() {
    let resultados = document.getElementById('resultados');
    if (numerosAdicionados.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = numerosAdicionados.length;
        let maior = Math.max(...numerosAdicionados);
        let menor = Math.min(...numerosAdicionados);
        let soma = numerosAdicionados.reduce((acc, val) => acc + val, 0);
        let media = soma / total;

        resultados.innerHTML = '';
        resultados.innerHTML += `<p>Total de números: ${total}</p>`;
        resultados.innerHTML += `<p>Maior valor: ${maior}</p>`;
        resultados.innerHTML += `<p>Menor valor: ${menor}</p>`;
        resultados.innerHTML += `<p>Soma dos valores: ${soma}</p>`;
        resultados.innerHTML += `<p>Média dos valores: ${media.toFixed(2)}</p>`;
    }
}
