let numCard = 0;

/* Função para quantidade de cartas*/
function cardQtd(){
    let i = parseInt(prompt("Digite o número de cartas (4 a 14):"));
    while(i > 14 || i < 4 || i % 2 !== 0){
        i = parseInt(prompt("Número inválido. Digite o número de cartas (4 a 14):"));
    }
    numCard = i;
}

/* Função  */
