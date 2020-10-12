let boxes = document.querySelectorAll('.boxes')
let container = document.querySelector('.game-container')
let turn = 0
let blue = []
let red = []
let playerTurn = document.querySelector('.turn')
let winningConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
let isWinner = false;
let matchCount = 0

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    boxes[i].addEventListener('click', showMark)
}

function showMark(evt) {
    evt.preventDefault()
    turn +=1
    if (turn % 2 === 0 && turn < 10) {
        evt.target.classList.add('red')
        evt.target.innerText = 'X'
        playerTurn.innerHTML = 'Blue\'s Turn'
        playerTurn.classList.add('blue')
        playerTurn.classList.remove('red')
        red.push(Number(evt.target.id))
        colorName = "Red"
        if(red.length >= 3) {
            compare(red)
        }
    } else {
        evt.target.classList.add('blue')
        evt.target.innerText = 'O'
        playerTurn.innerHTML = 'Red\'s Turn'
        playerTurn.classList.add('red')
        playerTurn.classList.remove('blue')
        blue.push(Number(evt.target.id))
        colorName = "Blue"
        if(blue.length >= 3) {
            compare(blue)
        }
    }
        if (turn < 9 && isWinner === true) {
            for (let i = 0; i <boxes.length; i++) {
                boxes[i].removeEventListener('click', showMark)
            }
        }
        if (turn >= 9 && isWinner === false) {
            playerTurn.classList.add('game-over')
            playerTurn.classList.remove('red')
            playerTurn.classList.remove('blue')
            playerTurn.innerHTML = `You haved tied. Click 'New Game' to Start a New Game`
        }
        evt.target.removeEventListener('click', showMark)
    }
    function compare (color) {
        for (let i = 0; i < winningConditions.length; i++) {
            matchCount = 0
            for (let j = 0; j < color.length; j++) {
                if (color.includes(winningConditions[i][j]) === true) {
                    matchCount = matchCount + 1
                    if (matchCount === 3) {
                        playerTurn.classList.add('game-over')
                        playerTurn.innerHTML = `${colorName} is the winner! Click 'New Game' to Start a New Game.`
                        isWinner = true
                    }
                }
            }
        }
    }
    
    