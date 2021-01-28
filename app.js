let player1 = 0;
let player2 = 0;

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnReset = document.querySelector('#btnReset');

const resetNrOfGames = document.querySelector('#rounds');

function game(gameRounds) {
    if(player1 === gameRounds) {
        document.getElementById('scoreP1').style.color = 'green';
        document.getElementById('scoreP2').style.color = 'red';
        buttonDisable();
    } else if(player2 === gameRounds) {
        document.getElementById('scoreP2').style.color = 'green';
        document.getElementById('scoreP1').style.color = 'red';
        buttonDisable();
    }
}

btnOne.addEventListener('click', () => {
    const gameRounds = parseInt(document.querySelector('#rounds').value);
    document.getElementById('scoreP1').innerHTML = ++player1;
    game(gameRounds);
});

btnTwo.addEventListener('click', () => {
    const gameRounds = parseInt(document.querySelector('#rounds').value);
    document.getElementById('scoreP2').innerHTML = ++player2;
    game(gameRounds);
});

resetNrOfGames.addEventListener('change', () => resetGame());
btnReset.addEventListener('click', () => resetGame());

function resetGame() {
    player1 = 0;
    player2 = 0;
    document.getElementById('scoreP1').innerHTML = player1;
    document.getElementById('scoreP1').style.color = 'black';

    document.getElementById('scoreP2').innerHTML = player2;
    document.getElementById('scoreP2').style.color = 'black';
    buttonEnable();
}

function buttonDisable() {
    btnOne.disabled = true;
    btnTwo.disabled = true;
};

function buttonEnable() {
    btnOne.disabled = false;
    btnTwo.disabled = false;
};