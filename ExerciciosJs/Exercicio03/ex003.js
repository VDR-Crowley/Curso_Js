/*
3) - Ler nome, endereço, telefone e imprimir 
*/

var nome = window.prompt("Informe seu nome");
var endereco = window.prompt("Informe seu endereço");
var telefone = window.prompt("Informe seu telefone");
/*
window.alert(`Esse foi o nome informado: ${nome}`);
window.alert(`Esse foi endereço informado: ${endereco}`);
window.alert(`Esse foi o telefone informado: ${telefone}`);
*/
document.writeln(`Esse foi o nome informado: ${nome}<br>`); //<br>
document.writeln(`Esse foi endereço informado: ${endereco}<br>`);//tag html
document.writeln(`Esse foi o telefone informado: ${telefone}<br>`);//usada para quebrar linha