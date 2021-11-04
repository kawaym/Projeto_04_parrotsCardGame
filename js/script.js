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
        num_cartas = parseInt(prompt("Por favor, número par entre 4 e 14:"))
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
        carta = [`<button class="carta" onclick="pedirCarta(this)" data-identifier="card"  id="${num_atual}">
        <div class="face frente" data-identifier="front-face">
        <img  src="assets/front.png"/>
        </div>
        <div class="face costas" data-identifier="back-face">
        <img src="assets/${lista_gifs[num_atual]}parrot.gif"/>
        </div>
        </button>`
        ,
        `<button class="carta" onclick="pedirCarta(this)" data-identifier="card"  id="${num_atual}">
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
}
function pedirCarta(carta){
    carta_desvirada = document.querySelector(".clicado");
    cartas_desviradas = document.querySelectorAll(".clicado");
    if (cartas_desviradas.length < 2){
        carta.classList.toggle("clicado");
    }
    else if (cartas_desviradas.length === 2){
       while(carta_desvirada !== null){
            carta_desvirada.classList.remove("clicado");
            carta_desvirada = document.querySelector(".clicado");
        }
        // carta.classList.toggle("clicado");
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