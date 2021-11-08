let pares_solucionados = 0;
let jogadas = 0;
function centralizarCartas(cartas){
    let container = document.querySelector(".container");
    //Divide em linhas de quantidade interativa conforme o tamanho do jogo
    //OPCIONAL
    let divisor = 2;
    if (cartas % 3 === 0){
        divisor = 3;
    }
    container.style.setProperty('--num_cartas', cartas);
    container.style.setProperty('--divisor', divisor);
}
function iniciarJogo(){
    let jogo = document.querySelector(".container");
    let menu = document.querySelector(".menu_inicial");

    let num_cartas = parseInt(prompt("Insira o número de cartas desejado(4-14):"));
    while(num_cartas > 14 || num_cartas < 4 || num_cartas % 2 !== 0){
        num_cartas = parseInt(prompt("Por favor, número par entre 4 e 14:"));
    }
    menu.classList.add("escondido");
    jogo.classList.add("jogando");
    criarJogo(num_cartas);
}
function criarJogo(num_cartas){
    let lista_gifs = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
    lista_gifs.sort(comparador);    
    let num_atual = 0;
    let carta = [];
    let lista_cartas = [];
    let tabuleiro = document.querySelector(".container");

    while (num_atual < (num_cartas/2)){
        carta = [`<button class="carta em_jogo" onclick="pedirCarta(this)" data-identifier="card"  id="${num_atual}">
        <div class="face frente" data-identifier="front-face">
        <img  src="assets/front.png"/>
        </div>
        <div class="face costas" data-identifier="back-face">
        <img src="assets/${lista_gifs[num_atual]}parrot.gif"/>
        </div>
        </button>`
        ,
        `<button class="carta em_jogo" onclick="pedirCarta(this)" data-identifier="card"  id="${num_atual}">
        <div class="face frente" data-identifier="front-face">
        <img  src="assets/front.png"/>
        </div>
        <div class="face costas" data-identifier="back-face">
        <img src="assets/${lista_gifs[num_atual]}parrot.gif"/>
        </div>
        </button>`];
        num_atual = num_atual + 1;
        lista_cartas.push(carta[0], carta[1]);
    }
    tabuleiro.innerHTML = embaralharCartas(lista_cartas);
    centralizarCartas(num_cartas);
    pares_solucionados = document.querySelectorAll(".em_jogo").length;
}
function pedirCarta(carta){
    let contador = 0;
    jogadas++;
    let carta_desvirada = document.querySelector(".clicado.em_jogo");
    let cartas_desviradas = document.querySelectorAll(".clicado.em_jogo");
    if (cartas_desviradas.length < 2 && carta.classList[1] === "em_jogo"){
        carta.classList.toggle("clicado");
        fimJogo();
    }
    else if (cartas_desviradas.length === 2){
        if(cartas_desviradas[0].id === cartas_desviradas[1].id){
            cartas_desviradas[0].classList.remove("em_jogo");
            cartas_desviradas[1].classList.remove("em_jogo");
            carta.classList.add("clicado");
            pares_solucionados -= 2;
        }
        setTimeout(function(){
            while(contador < 2){
                if (carta_desvirada.classList[1] === "em_jogo"){
                    carta_desvirada.classList.remove("clicado")
                }
                contador++;
                carta_desvirada = document.querySelector(".clicado.em_jogo");
            }
            carta.classList.add("clicado");
        }, 1000);
    }
}
function embaralharCartas(campo){
    let num_atual = 0;
    let tabuleiro = "";
    campo.sort(comparador);
    while(num_atual < campo.length){
        tabuleiro = tabuleiro + campo[num_atual]
        num_atual = num_atual + 1;
    }
    return tabuleiro;
}
function comparador() { 
	return Math.random() - 0.5; 
}
function fimJogo(){
    let status = document.querySelectorAll(".em_jogo");
    
    setTimeout(function(){
        if (status.length === 2){
            alert(`Você ganhou em ${jogadas} jogadas. Parabéns!`);
        }   
    }, 500);
}