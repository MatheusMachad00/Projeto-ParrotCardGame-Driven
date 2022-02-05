let numCard = 0;
let parrots = ['imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif']

/* Função para quantidade de cartas*/
function cardQtd(){
    let i = parseInt(prompt("Digite o número de cartas (4 a 14):"));
    while(i > 14 || i < 4 || i % 2 !== 0){
        i = parseInt(prompt("Número inválido. Digite o número de cartas (4 a 14):"));
    }
    numCard = i;
}

/* Função para randomizar as cartas */
function randomizer() { 
	return Math.random() - 0.5; 
}

/* Função para criar o jogo (FUNÇÃO INCOMPLETA!!!!!!!!)*/
/*function createGame(numCard){
    const ul = document.querySelector("ul");
    for(let i = 0; i < numCard / 2; i++ ){
        ul.innerHTML += `<div class="card">
        <img src="imagens/front.png" alt="front_card">
    </div>`
    }
}*/


/* Função para virar a carta */
const cards = document.querySelectorAll('.card');
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));