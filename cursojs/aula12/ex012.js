/*
Treinado maneiras de usar o desvio condional simples, composto
e alinhado/encadeado
*/
var idade = 70;
console.log(`Você tem ${idade} anos`);
if(idade < 16){
    console.log('Não vota');
}else{
    if(idade < 18){  //|| idade > 65
        console.log('Seu voto é opcional')
    }else{
        if(idade > 65){
            console.log('Seu voto é opcional');
        }else{
            console.log('Seu voto é obrigatorio');
        }
    }
}
/*
if(idade < 16) {
    console.log('Não vota');
}else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
}else {
    console.log('Voto obrigatorio');
}
*/
