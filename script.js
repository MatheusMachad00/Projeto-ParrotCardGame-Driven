let numCard = 0;
let parrots = ['imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif'];
const allCards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

/* Função para quantidade de cartas*/
function cardQtd() {
    let i = parseInt(prompt("Digite o número de cartas (4 a 14):"));
    while (i > 14 || i < 4 || i % 2 !== 0) {
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

/* Função para virar a carta*/
function flipCard() {

    this.classList.add('flip');
    if (lockBoard) return;
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

/* Função para verificar se as cartas são iguais*/
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    }
    unflipCards();
}

/* Função para desabilitar a virada de carta após o match*/
function disableCards() {
    firstCard.removeEventListener('click', flipCard());
    secondCard.removeEventListener('click', flipCard());
}

/* Função para desvirar as cartas*/
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1000);
}

allCards.forEach(card => card.addEventListener('click', flipCard));