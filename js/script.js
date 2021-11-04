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
    while(num_cartas > 14 || num_cartas < 4 ||  num_cartas % 2 !== 0){
        num_cartas = parseInt(prompt("Por favor, número par entre 4 e 14:"))
    }
    menu.classList.add("escondido");
    jogo.classList.add("jogando");
    criarJogo(num_cartas);
    
}
function criarJogo(qte){
    let num_atual = 0;
    const gif = "metal";
    const carta = `<button class="carta" onclick="pedirCarta(this)" data-identifier="card">
    <div class="face frente" data-identifier="front-face">
    <img  src="assets/front.png"/>
    </div>
    <div class="face costas" data-identifier="back-face">
    <img src="assets/${gif}parrot.gif"/>
    </div>
    </button>`;
    let tabuleiro = document.querySelector(".container");
    while (num_atual < qte){
        tabuleiro.innerHTML = tabuleiro.innerHTML + carta;
        num_atual = num_atual + 1;
        console.log("iteração");
    }
    centralizarCartas(qte);
}
function pedirCarta(carta){
    carta.classList.toggle("clicado");
}