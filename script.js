'use strict';

let score = 20
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let highscore = 0;

const displayMessage = function (message) {
    return document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!')

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0
        }
    }
})

console.log(secretNumber)
document.querySelector('.again').addEventListener('click', () => {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
})
