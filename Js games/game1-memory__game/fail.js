document.addEventListener('DOMContentLoaded', ()=>{
    // card options
    const cardArray = [
        {
        name: 'art',
        img: "images/art.jpg"
        },
        {
        name: 'art',
        img: "images/art.jpg"
        },
        {
        name: 'bus',
        img: "images/bus.jpg"
        },
        {
        name: 'bus',
        img: "images/bus.jpg"
        },
        {
        name: 'night',
        img: "images/night.jpg"
        },
        {
        name: 'night',
        img: "images/night.jpg"
        },
        {
        name: 'painting',
        img: "images/painting.jpg"
        },
        {
        name: 'painting',
        img: "images/painting.jpg"
        },
        {
        name: 'question_mark',
        img: "images/question_mark.jpg"
        },
        {
        name: 'question_mark',
        img: "images/question_mark.jpg"
        },
        {
        name: 'robot',
        img: "images/robot.jpg"
        },
        {
        name: 'robot',
        img: "images/robot.jpg"
        }
    ]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []
//create game board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('date-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

    }
}

//check for matches
function checkForMatch() {
var cards = document.querySelector('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]
if (cardsChosenId[0] === cardsChosenId[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/white.jpg')
    cards[optionTwoId].setAttribute('src', 'images/white.jpg')
    cardsWon.push(cardsChosen)
} else {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    alert('Sorry, try again')
}

cardChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardWon === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
}
}
//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})
