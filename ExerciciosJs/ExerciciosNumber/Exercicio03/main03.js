/*
3) - Fazer um programa que imprima a media aritmetica dos numeros 8, 9 e 7.
A media dos numeros 4, 5 e 6. A soma das duas medias. A media da media.
*/
var n1 = 8, n2 = 9, n3 = 7;
var n4 = 4, n5 = 5, n6 = 6;
var soma = ((n1 + n2 + n3) / 3 + (n4 + n5 + n6) / 3);
console.log("Essa é a soma das medias: "+soma);
var media = (((n1 + n2 + n3) / 3 + (n4 + n5 + n6) / 3) / 2);
console.log("A media das media: "+media);
