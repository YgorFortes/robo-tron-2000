const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const controle = document.querySelectorAll('[data-controle]');//Criei um array;
const estatisticas = document.querySelectorAll('[data-estatistica');
const pecas = {// Normalmente nomeado no plural 
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=>{ // Usei o forEach (elemento, indice) também usei função anonima; O elemento, mostra o array controle
    elemento.addEventListener('click', (evento)=>{ //ao clicar, faz algo. todo evento de click tem o parametro do evento,  evento onde acontece tudo
       manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //o target é onde aquele click aconteceu. Ele tá puxando o atributo data-controle = + ou - //parentNode é para procurar o pai do elemento. 
       atualizaEstatisticas(evento.target.dataset.peca);//dataset.peca está puxando o nome do data-atribute
    })
})


function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
        if(peca.value < 0){
            peca.value = 0;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    console.log(pecas[peca]);//Está puxando o valor do objeto
    estatisticas.forEach((elemento) =>{//percorrendo o array estatisticas
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]//Busca o texto do elemento
    })
}







