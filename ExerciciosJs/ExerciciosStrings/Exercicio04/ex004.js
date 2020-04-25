/*
4) - Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25 anos.
Imprimir o nome da pessoa e a palavra ACEITA, caso contrario imprimir NÂO ACEITA.
*/
var nome = window.prompt("Infome seu nome");
var sexo = window.prompt("Informe seu sexo M/F");
var idade = window.prompt("Informe sua idade");
if(sexo === 'F' && idade <= 25){
    document.write(`Bem vinda ${nome} `);
    window.alert("você foi ACEITA.");
}else{
    document.write(`lamento mais esse site não é para você.`);
    window.alert("Você não foi ACEITA.");
}