/*
2) - Receber um valor qualquer do teclado e imprimir esse valor com reajuste
de 10%.
*/

var valor = window.prompt("Digite qualquer valor");
reajuste = valor*110/100;
document.writeln(`O reajuste ${reajuste} de 10% no valor ${valor} informado`);