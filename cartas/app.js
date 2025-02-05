/**
 * 
 * Estudo da array 
 * Exemplo de cartas do baralho
 * 
 * @author Ryan Rodrigues
 */

function sortea(){
//                 [0] [1] [2] [3]
    let nipes =  ["♥","♦","♣","♠"]
//                [0] [1] [2]
    let faces =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]


// gerando numeros aleatorios em javascript (random)
    //Math.random( ) * 4 ( gera 4 numeros:0,1,2,3)
    //Math.floor() converte para  numeros inteiros
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteado = faces[Math.floor(Math.random() * 13)]

    //console.log(faceSorteado)
    //console.log(nipeSorteado)

    //determinar a cor com base do naipe
    let cor
    if(nipeSorteado === "♥" || nipeSorteado === "♦"){
        cor = "#ff0000"
    }else{
        cor = "#000000"
    }


    //Renderização do canto superior esquerdo
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteado}</div>  <div>${nipeSorteado}</div>`
    //a linha abaixo aplica o estilo de cor ao documento html
    //identificando como  'supEsq'
    document.getElementById('supEsq').style.color = cor

    //Renderização do meio da carta
    //Verificar o naipe sorteado e renderizar uma imagem ou o
    //nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById('centroCarta')
    if(faceSorteado === "J"){
        cc.innerHTML = `<img src="img/valete.png"></img>`
    }else if(faceSorteado === "Q"){
        cc.innerHTML = `<img src="img/dama.png"></img>`
    }else if(faceSorteado === "K"){
        cc.innerHTML = `<img src="img/rei.png"></img>`
    }else{
        cc.innerHTML =`${nipeSorteado}`
        cc.style.color = cor
    }

    //Renderização do canto inferior direito
    document.getElementById('infDir').innerHTML = `<div>${faceSorteado}</div>  <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor
}