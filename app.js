
function fillDeck() {
    const cardsValue = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const cardsColor = ['♠','♣','♡','♢'];

    let filledDeck = [];

    for (const value of cardsValue) {
        cardsColor.forEach((color)=> {
            filledDeck.push(value + color);
        });
    }

    return filledDeck;
}
            
function shuffleDeck(deck) {
    let deckCopy = [...deck];
    let i = deckCopy.length;
    while (--i > 0) {
        const possibilityNumbersForInt32 = 4_294_967_296;
        let secureRandomNumber = crypto.getRandomValues(new Uint32Array(1))[0]/possibilityNumbersForInt32;
        let randIndex = Math.floor(secureRandomNumber * (i + 1));
        [deckCopy[randIndex], deckCopy[i]] = [deckCopy[i], deckCopy[randIndex]];
    }
    return deckCopy;
}

function splitDeckInTwo(deck) {
    let deckCopy = [...deck];
    const middleIndex = Math.ceil(deckCopy.length / 2);

    const deckOne = deckCopy.splice(0, middleIndex);   
    const deckTwo = deckCopy.splice(-middleIndex);

    return [deckOne,deckTwo]
}

function drawnCard(deck) {
    let card = deck[0];
    deck.shift();
    return card;
}

/* -- APPLICATION -- */

let deck = fillDeck();
let mixedDeck = shuffleDeck(deck);

let drawnButton = document.getElementById("drawnButton");
let viewCardValue = document.getElementById("cardValue");
let viewDeck = document.getElementById("deck");

viewDeck.innerHTML = mixedDeck;

drawnButton.addEventListener("click", (e)=> {
    let drawnedCard = drawnCard(mixedDeck);
    viewDeck.innerHTML = mixedDeck;
    viewCardValue.textContent = drawnedCard;
});