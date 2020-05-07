function Tabuada(){
    let numero = window.document.getElementById('txtnum');
    let tab = window.document.getElementById('seltab');
    if(numero.value.length == 0){
        window.alert('[ERRO!!]');
    }else{
        let num = Number(numero.value);
        tab.innerHTML = '';
        for (let i = 1; i <= 10; i++){
            let item = window.document.createElement('option');
            item.text = `${num} X ${i} = ${num*i} `;
            tab.appendChild(item); 
        }
    }
}
/*
Utilizando o while para a tabuada.
    let cont = 1;
    tab.innerHTML = '';
    while(cont <= 10){
        let item = document,createElement('option');
        item.tex = `${num} X ${i} = ${num*cont}`;
        tab.appendChild(item);
        cont++;
    }
*/