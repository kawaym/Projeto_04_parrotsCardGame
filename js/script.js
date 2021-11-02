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