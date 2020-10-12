let boxes = document.querySelectorAll('.boxes')
let container = document.querySelector('.game-container')
let turn = 0
let playerTurn = document.querySelector('.turn')
let winningConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

for (let i=0; i < boxes.length; i++) {
    boxes[i].setAttribute('id', i+1)
    boxes[i].addEventListener('click', showMark)
}

function showMark() {
    e.preventDefault()
    turn +=1
    if (turn % 2 === 0 && turn < 10) {
        e.target.classList.add('red')
        e.target.innerText = 'X'
        playerTurn.innerHTML = 'Blue\'s Turn'
        playerTurn.classList.add('blue')
        playerTurn.classList.remove('red')
        red.push(Number(e.target.id))
        colorName = "Red"
        if(red.length >= 3) {
            compare(red)
        }
    } else {
    }
}
    