const $rockButton1 = document.querySelector('.rock-button-player-1')
const $paperButton1 = document.querySelector('.paper-button-player-1')
const $scissorsButton1 = document.querySelector('.scissors-button-player-1')

const $rockButton2 = document.querySelector('.rock-button-player-2')
const $paperButton2 = document.querySelector('.paper-button-player-2')
const $scissorsButton2 = document.querySelector('.scissors-button-player-2')

const $player1Field = document.querySelector('.player-1-field')
const $player2Field = document.querySelector('.player-2-field')

const $resetButton = document.querySelector('.reset-button')
const $startButton = document.querySelector('.start-button')

const $winnerTitle = document.querySelector('.winner-title')

const $player1score = document.querySelector('.player-1-score')
const $player2score = document.querySelector('.player-2-score')

let player1Move = ''
let player2Move = ''
let gameResult = null

let player1Score = 0
let player2Score = 0

let gameStart = false

function verifyWinner(){
    if (player1Move == 'rock' && player2Move == 'paper') {
        gameResult = 2
    } else if (player1Move == 'paper' && player2Move == 'scissors') {
        gameResult = 2
    } else if (player1Move == 'scissors' && player2Move == 'rock') {
        gameResult = 2
    } else if (player1Move == 'paper' && player2Move == 'rock') {
        gameResult = 1
    } else if (player1Move == 'rock' && player2Move == 'scissors') {
        gameResult = 1
    } else if (player1Move == 'scissors' && player2Move == 'paper') {
        gameResult = 1
    } else if (player1Move == player2Move)
        gameResult = 0
}

function printWinner(){
    if (gameResult == 2) {
    $winnerTitle.innerHTML = 'Jogadora 2 ganhou!'
    } else if (gameResult == 1) {
        $winnerTitle.innerHTML = 'Jogadora 1 ganhou!'
    } else if (gameResult == 0){
        $winnerTitle.innerHTML = 'Empatou!'
    }
}

function resetBattleField(){
    $player1Field.innerHTML = ''
    $player2Field.innerHTML = ''
}

function resetMoveVariables(){
    player1Move = ''
    player2Move = ''
}

function resetScore(){
    $player1score.innerHTML = '00'
    $player2score.innerHTML = '00'
}

function resetScoreVariables(){
    player1Score = 0
    player2Score = 0
}

function printScore(){
    $player1score.innerHTML = player1Score
    $player2score.innerHTML = player2Score

}

function addPoint(winnerNumber){
    if(winnerNumber == 1) {
        player1Score++
    }
    if(winnerNumber == 2) {
        player2Score++
    }
}

function move(moveName, fieldNumber){
    if (gameStart) {
        if (fieldNumber == 1){
            $player1Field.innerHTML = '<img class="player-move" src="' + moveName + '.png"></img>'
            player1Move = moveName
        } else if (fieldNumber == 2){
            $player2Field.innerHTML = '<img class="player-move" src="' + moveName + '.png"></img>'
            player2Move = moveName
        }
        verifyWinner()
        printWinner()
        if (gameResult != null) {
            setTimeout(resetBattleField, 2000)
            resetMoveVariables()
            addPoint(gameResult)
            printScore()
            gameResult = null
        }
    }
}


$rockButton1.addEventListener('click' , function(){
    move('rock', 1)
})
$rockButton2.addEventListener('click' , function(){
    move('rock', 2)
})
$paperButton1.addEventListener('click' , function(){
    move('paper', 1)
})
$paperButton2.addEventListener('click' , function(){
    move('paper', 2)
})
$scissorsButton1.addEventListener('click' , function(){
    move('scissors', 1)
})
$scissorsButton2.addEventListener('click' , function(){
    move('scissors', 2)
})

$resetButton.addEventListener('click', function(){
    resetBattleField()
    resetMoveVariables()
    gameResult = null
    resetScore()
    $winnerTitle.innerHTML = 'Resultado'
    resetScoreVariables()
})

$startButton.addEventListener('click', function(){
    if (gameStart == true){
        gameStart = false
        $startButton.innerHTML = 'Iniciar'
    } else {
        gameStart = true
        $startButton.innerHTML = 'Pausar'
    }

    $startButton.classList.toggle('start')
        
})