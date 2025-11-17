const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choicesDisplay = document.getElementById('choices-display');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'user';
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'user';
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'user';
    }

    return 'computer';
}

function updateDisplay(userChoice, computerChoice, winner) {
    choicesDisplay.textContent = `You chose ${userChoice.toUpperCase()} | Computer chose ${computerChoice.toUpperCase()}`;

    if (winner === 'draw') {
        resultMessage.textContent = "It's a Draw! 🤝";
        resultMessage.style.color = '#ffd700';
    } else if (winner === 'user') {
        resultMessage.textContent = "You Win! 🎉";
        resultMessage.style.color = '#00ff00';
        userScore = userScore + 1;
        userScoreDisplay.textContent = userScore;
        userScoreDisplay.classList.add('win-effect');
        setTimeout(() => {
            userScoreDisplay.classList.remove('win-effect');
        }, 500);
    } else {
        resultMessage.textContent = "Computer Wins! 😢";
        resultMessage.style.color = '#ff6b6b';
        computerScore = computerScore + 1;
        computerScoreDisplay.textContent = computerScore;
        computerScoreDisplay.classList.add('win-effect');
        setTimeout(() => {
            computerScoreDisplay.classList.remove('win-effect');
        }, 500);
    }
}
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateDisplay(userChoice, computerChoice, winner);
}
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    resultMessage.textContent = 'Make your choice to start!';
    resultMessage.style.color = 'white';
    choicesDisplay.textContent = '';
}

rockBtn.addEventListener('click', function() {
    playGame('rock');
});
paperBtn.addEventListener('click', function() {
    playGame('paper');
});
scissorsBtn.addEventListener('click', function() {
    playGame('scissors');
});
resetBtn.addEventListener('click', function() {
    resetGame();
});