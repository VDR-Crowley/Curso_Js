/*
9) - Solicitar no teclado uma frase com no máximo 40 letras. Se o tamanho for
maior que 40, dar uma mensargem de entrada inválida e solicitar novamente,
se passar, imprimir a frase na vertical com um tempo em cada letra.
*/
var frase = window.prompt("Escreva uma frase");
var repeti;
var vert;
while(frase != true){
    if(frase.length > 40){
        window.alert(`Frase inválida possui ${frase.length} caracter`);
        var frase = window.prompt("Escreva uma frase");
        repeti=+1;
    }else{
        document.writeln(frase);
    frase=+1;
    }
};