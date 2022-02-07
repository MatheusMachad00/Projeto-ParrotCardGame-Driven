let numCard = 0;
let parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
const allCards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let board = [];

/* Função para quantidade de cartas e criar jogo*/
function gameStart() {
    let i = parseInt(prompt("Digite o número de cartas (4 a 14):"));
    while (i > 14 || i < 4 || i % 2 !== 0) {
        i = parseInt(prompt("Número inválido. Digite o número de cartas (4 a 14):"));
    }
    numCard = i;
    for (let j = 0; j < numCard / 2; j++) {
        board.push(parrots[j]);
        board.push(parrots[j]);
    }

    board.sort(randomizer);
    const main = document.querySelector("main");
    main.innerHTML = "";
    for (let i = 0; i < numCard; i++) {
        main.innerHTML += `
        <div class="card" data-framework="${board[i]}" data-identifier="card" onclick="flipCard(this)" 
        >
        <img class="front-face" src="imagens/front.png" alt="front" data-identifier="front-face">
        <img class="back-face" src="imagens/${board[i]}.gif" alt="${board[i]}" data-identifier="back-face">
    </div>
        `;
    }
    
}

/* Função para randomizar as cartas */
function randomizer() {
    return Math.random() - 0.5;
}

/* Função para virar a carta*/
function flipCard(card) {
    
    card.classList.add('flip');
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