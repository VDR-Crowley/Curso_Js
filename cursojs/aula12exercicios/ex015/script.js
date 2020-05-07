function verificando(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genero = 'homem';
            if (idade >= 0 && idade < 3) {
                // Bebe
                img.setAttribute('src', 'bebe-menino.png');
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'menino.png');
            } else if ( idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homen.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png');
            } else {
                // Idoso
                img.setAttribute('src', 'velho-homem.png');
            }
        }else if(fsex[1].checked){
            genero = 'mulher';
            if (idade >= 0 && idade < 3) {
                // Bebe
                img.setAttribute('src', 'bebe-menina.png');
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'menina.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png');
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher.png');
            } else {
                // Idosa
                img.setAttribute('src', 'velha-mulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}