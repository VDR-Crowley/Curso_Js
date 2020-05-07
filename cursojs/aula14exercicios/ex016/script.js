/*
Esse exercicio tem como objetivo dar ao usuario possibilidade
de escolher o inicio da contagem e o fim e como ela sera feita
de 1 em 1 ou de 2 em 2 e etc...
interaçoe com HTML e CSS
*/
function Contando() {

    var ini = window.document.getElementById('ini');
    var fim = window.document.getElementById('fim');
    var quant = window.document.getElementById('quant');
    var res = window.document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || quant.value.length == 0) {
        res.innerHTML = 'Opa... Você esqueceu de colocar os valores.';
        window.alert('[ERRO!]');

    } else if (quant.value.length == 0){
        res.innerHTML = 'O passo não pode ficar zerado.';

    } else {
        let contI = Number(ini.value);
        let contF = Number(fim.value);
        let passo = Number(quant.value);

        res.innerHTML = `\u{1F9ED}Contando...`;
        // Contagem.
        if (contI<contF) {
            // Regressiva.
            for (let i = contI; i <= contF; i+=passo){ // i = i + passo
                res.innerHTML += `${i} \u{1F449}`;
            }
        } else {
            // Degressiva.
            for(let i = contI; i >= contF ; i-=passo){
                res.innerHTML += `${i} \u{1F448}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
