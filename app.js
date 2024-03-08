let randomPlayer1 = Math.floor(Math.random() * 6 + 1)
let randomPlayer2 = Math.floor(Math.random() * 6 + 1)
let randomDice1 = 'imgs/dice' + randomPlayer1 + '.png'
let randomDice2 = 'imgs/dice' + randomPlayer2 + '.png'
img1 = document.querySelectorAll('img')[0]
img1.setAttribute('src', randomDice1)
img2 = document.querySelectorAll('img')[1]
img2.setAttribute('src', randomDice2)

if (randomPlayer1 > randomPlayer2) {
    document.querySelector('.title').innerHTML = 'Jogador 1 ganhou! 🏆'
    document.querySelector('.title').style.color = 'aqua'
} else if (randomPlayer2 > randomPlayer1) {
    document.querySelector('.title').innerHTML = 'Jogador 2 ganhou! 🏆'
    document.querySelector('.title').style.color = 'chartreuse'
} else {
    document.querySelector('.title').innerHTML = "Empate!"
}
