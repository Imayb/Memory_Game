// array with objects
const cardArray = [
    {
        name: 'fries',
        img:'imgs/fries.png',
    },

    {
        name: 'cheeseburger',
        img:'imgs/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'imgs/hotdog.png',
    },
    {
        name: 'icecream',
        img:'imgs/icecream.png',
    },
    {
        name: 'milkshake',
        img:'imgs/milkshake.png',
    },
    {
        name: 'pizza',
        img:'imgs/pizza.png',
    },
    {
        name: 'fries',
        img:'imgs/fries.png',
    },

    {
        name: 'cheeseburger',
        img:'imgs/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'imgs/hotdog.png',
    },
    {
        name: 'icecream',
        img:'imgs/icecream.png',
    },
    {
        name: 'milkshake',
        img:'imgs/milkshake.png',
    },
    {
        name: 'pizza',
        img:'imgs/pizza.png',
    }
]
// sort array randomly
cardArray.sort(() => 0.5 - Math.random())
// find id grid
const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)

    }
}
createBoard()