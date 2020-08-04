let valores = [ 9, 5, 7, 22, 15];
for(let i = 0; i < valores.length; i++){
    console.log(`a posição ${i} tem o valor ${valores[i]}`);
}

for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}