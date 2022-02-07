let numCard = 0;
let parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
const allCards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let board =[];

/* Função para quantidade de cartas*/
function gameStart() {
    let i = parseInt(prompt("Digite o número de cartas (4 a 14):"));
    while (i > 14 || i < 4 || i % 2 !== 0) {
        i = parseInt(prompt("Número inválido. Digite o número de cartas (4 a 14):"));
    }
    numCard = i;
    for (let j = 0; j < numCard / 2; j++) {
        board.push(allCards[j]);
        board.push(allCards[j]);
    }

    board.sort(randomizer);
    const main = document.querySelector("main");
    main.innerHTML = "";

    for (let i = 0; i < cardsQuantity; i++) {
        main.innerHTML += `
        <div class="card" data-framework="${board[j]}">
        <img class="front-face" src="imagens/front.png" alt="front">
        <img class="back-face" src="imagens/${board[j]}.gif" alt="${board[j]}">
    </div>
        `;
    }    
}

/* Função para randomizar as cartas */
function randomizer() {
    return Math.random() - 0.5;
}

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