/*
7) - Entrar com um nome e imprimir o nome somente se a primeira letra for "a"
(maiuscula ou miniscula).
*/
var nome = window.prompt("Digites um nome");
if(nome.substring(0 == 'a') || nome.substring(0 == 'A')){
    window.alert(nome);
}else{
    window.alert("????");
}