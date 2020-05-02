var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();
console.log(`Agora é ${horas}:${minutos} horas`);
if(horas >= 06 && horas <= 12) {
    console.log('Bom dia!');
} else if(horas >= 13 && horas <= 18) {
    console.log('Boa tarde!');
} else if(horas >= 19 && horas <= 24) {
    console.log('Boa noite!');
} else if(horas >= 01 && horas <= 05) {
    console.log('Boa madrugada!');
}