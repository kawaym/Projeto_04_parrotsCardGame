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

    let num_cartas = parseInt(prompt("Insira o número de cartas desejado:"));
    if (num_cartas > 14 || num_cartas <  4 || num_cartas % 2 !== 0){
        num_cartas = parseInt(prompt("Por favor, número par entre 4 e 14:"))
    }
    menu.classList.add("escondido");
    jogo.classList.add("jogando");
    centralizarCartas(num_cartas);
    criarJogo(num_cartas);
}