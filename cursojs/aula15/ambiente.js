let num = [5, 9, 6, 8, 3];
num.push(1);    // Adiciona um número no final do arrey.
num.sort();     // Ordena em ordem crescente.
console.log(num);
console.log(`o vetor tem ${num.length} posições`); // length comprimimento do vetor, o tamanho do arrey.

let pos = num.indexOf(4);
if(pos == -1){  // O indexOf não achou no vetor ele retorna -1
    console.log('O valor não foi encontrado');
}else{
    console.log(`O valor 4 está na posição ${pos}`);
}
