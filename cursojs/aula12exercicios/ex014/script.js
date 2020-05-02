function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas`;
    if(hora >= 6 && hora < 12){
        //BOM DIA
        img.src = 'foto-manha.png';
        document.body.style.background = '#e3c48e';
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'foto-tarde.png';
        document.body.style.background = '#b28371';
    }else{
        //BOA NOITE
        img.src = 'foto-noite.png';
        document.body.style.background = '#081b42';
    }
}