const body = document.body;
const getId = id => document.getElementById(id);
const startBut = getId('start');

const levelsMap = {
    'easy': {
        'class':'desk-three-cards',
        'numbersOfCard': 3,
    },

    'medium': {
        'class': 'desk-six-cards',
        'numbersOfCard': 6,
    },

    'hard': {
        'class': 'desk-ten-cards',
        'numbersOfCard': 10,
    }
};

let currentLevel = getId('easy').value;
let cardClicked = false;

const labels = document.querySelectorAll('.label');
const levels = document.getElementsByName('level');
const levelText = document.querySelectorAll('.label__text');

labels.forEach(item => {
    item.addEventListener('click', () => {
        levels.forEach((item, index) => {
            levelText[index].className = 'label__text';

            if (item.checked) {
                levelText[index].className = ' label__text checked';
            }
        });
    });
});
/*const cardBox = document.createElement('div');
const backsideCard = document.createElement('div');
            cardBox.className = 'card-box';
            cardBox.classList.add('card-box-hov');
            body.append(cardBox);
            backsideCard.className = 'card-backside';
            cardBox.append(backsideCard);
let collection = document.querySelectorAll('.card-box');

startBut.addEventListener('click', () => {
    for (let i=0; i< levelsMap[] )
})*/

const cardsCreate = (number, map) => {
    let randomCard = Math.floor(Math.random() * number);
    for (let i = 0; i < number; i++) {
        const cardBox = document.createElement('div');
        const backsideCard = document.createElement('div');
        const winCard = document.createElement('div');
        const overCard = document.createElement('div');
        if (i === randomCard) {
            cardBox.className = 'card-box';
            cardBox.classList.add('card-box-hov');
            map.append(cardBox);
            backsideCard.className = 'card-backside';
            cardBox.append(backsideCard);
            winCard.className = 'card-win-game';
            cardBox.append(winCard);
        } else {
            cardBox.className = 'card-box';
            cardBox.classList.add('card-box-hov');
            map.append(cardBox);
            backsideCard.className = 'card-backside';
            cardBox.append(backsideCard);
            overCard.className = 'card-over-game';
            cardBox.append(overCard);

        }
    }
};

startBut.addEventListener('click', () => {
    const MainDesk = getId('main');
    const SetParamNumbers = levelsMap[currentLevel];
    const cardsField = document.createElement('div');
    cardsField.className = SetParamNumbers['class'];
    body.append(cardsField);
    cardsCreate(SetParamNumbers['numbersOfCard'], cardsField);

    MainDesk.style.display = 'none';

    document.querySelectorAll('.card-box').forEach(card => {
        card.addEventListener('click', () => {
            if (cardClicked) {
                cardsField.style.display = 'none';
                MainDesk.style.display = '';
                cardClicked = false;
            } else {
                card.classList.add('card-click');
                card.classList.remove('card-box-hov');
                cardClicked = true;
            }
        });
    });
});
