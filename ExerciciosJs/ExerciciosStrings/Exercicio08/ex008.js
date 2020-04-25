/*
8) - Digitar um nome e solicitar que seja mostrado em maiúsculo.
*/
var nome = window.prompt("Digite um nome");
var conf = window.confirm("Deseja ver em maiúsculo?");
if(conf == true){
    document.write(nome.toUpperCase());
}