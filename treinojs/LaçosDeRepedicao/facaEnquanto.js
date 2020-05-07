var cont = 0;
do{
    var idade = prompt('Digite sua idade');
        if(idade < 18){
            alert('Você tem '+idade+' não pode acessar esse conteudo');
            cont++;
        }else{
            alert('Você pode acessar esse site');
            document.write('Você acessou');
            cont = NULL;
        }
}while(cont < 3);