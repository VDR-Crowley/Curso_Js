/*
1-) Receber um nome e imprimir as 4 primeiras letrass do nome.
Para Fazer esse exercicio foi usado a função .substring();
Ela pode ser definida com duas posições
a primeira representa o inicio e a segunda o final.
*/

var nome = window.prompt('qual o seu nome:');
window.alert(nome.substring(0, 4));
document.write(nome.substring(0, 4));

/*
var nome = "JavaScript";
console.log(`Primeiro exercicio em ${nome.substring(0, 4)}`);
*/