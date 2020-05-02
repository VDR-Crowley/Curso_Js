/*
1) - Informa tres numeros inteiros e imprimir a média.
*/
var num1 = parseInt(window.prompt("Informe o primeiro numero"));
var num2 = parseInt(window.prompt("Informe o segundo numero"));
var num3 = parseInt(window.prompt("Informe o terceiro numero"));
media = (num1 + num2 + num3) / 3;
document.writeln(`Essa é a ${parseFloat(media)} dos tres numeros informados`);