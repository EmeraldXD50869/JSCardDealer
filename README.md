# JSCardDealer

JSCardDealer is a small javascript game cards library that contains utilities for creating cards, decks, shuffling and dealing cards. It is especially suited for creating web-based card games.

## Loading support

* Classic loading. Loading through script src, objects accesible through JSCardDealer namespace.
* AMD/Require.JS

## Usage

### Creating cards

```javascript

// create cards
var cardWerewolf = new JSCardDealer.Card('Werewolf');
var cardVilager  = new JSCardDealer.Card('Villager');
var cardDrunk    = new JSCardDealer.Card('Drunk');
var cardSeer     = new JSCardDealer.Card('Seer');
...
var cardHeart1   = new JSCardDealer.Card(1); cardHeart1.setProperty('suit', '♥');
var cardHeart2   = new JSCardDealer.Card(2); cardHeart2.setProperty('suit', '♥');	 
var cardDiamond1 = new JSCardDealer.Card(1); cardDiamond1.setProperty('suit', '♦');
var cardDiamond2 = new JSCardDealer.Card(2); cardDiamond2.setProperty('suit', '♦');
..
var cardYellow1    = new JSCardDealer.Card('1'); cardReverse.setProperty('color', 'yellow');
var cardRed2       = new JSCardDealer.Card('2'); cardReverse.setProperty('color', 'red');
var cardReverseRed = new JSCardDealer.Card('reverse'); cardReverse.setProperty('color', 'red');
var cardSkipGreen  = new JSCardDealer.Card('skip'); cardReverse.setProperty('color', 'green');
...

```

### Getting card value and property

```javascript
card.getValue();
card.getProperty('color');
``` 



### Create deck of cards

```javascript
// create deck
var unoDeck = new JSCardDealer.Deck();

// add cards to the deck 
unoDeck.addCard(cardReverseRed);
unoDeck.addCard(cardSkipGreen);
unoDeck.addCard(cardRed2);	
...	
```

### Assign array of cards to deck

```javascript
// create empty array
var cards  = [];

// create some cards
var card1 = new JSCardDealer.Card(1);
var card2 = new JSCardDealer.Card(2);
var card3 = new JSCardDealer.Card(3);
var card4 = new JSCardDealer.Card(4);
var card5 = new JSCardDealer.Card(5);

// add cards to array
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

// create deck and add cards
var deck = new JSCardDealer.Deck();

// assign array of cards to deck
deck.assignCards(cards);
```

### Get remaining cards in a deck

```javascript
deck.getRemainingCards();
```

### Combine decks (for example piles)

```javascript
var card1 = new JSCardDealer.Card(1);
var card2 = new JSCardDealer.Card(2);
var card3 = new JSCardDealer.Card(3);
var card4 = new JSCardDealer.Card(4);
var card5 = new JSCardDealer.Card(5);

// create pile A
var pileA = new JSCardDealer.Deck();
pileA.addCard(card1);
pileA.addCard(card2);

// create pile B
var pileB = new JSCardDealer.Deck();
pileB.addCard(card3);
pileB.addCard(card4);
pileB.addCard(card5);

// combine pile a with pileB
pileA.combineWith(pileB);   
```

### Create a card dealer

```javascript
// create dealer
var cardDealer = new JSCardDealer.CardDealer(werewolvesDeck);

var cardDealer = new JSCardDealer.CardDealer();
cardDealer.assignDeck(werewolvesDeck);
```
### Shuffle the cards

The cards are shuffled by using the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

```javascript
// shuffle the cards
cardDealer.shuffleCards();

// shuffle the cards 5 times
cardDealer.shuffleCards(5);
```

### Deal the cards

```javascript
// deal card
var card = cardDealer.dealCard();
var anotherCard = cardDealer.dealCard();
``` 

### Get amount of remaining cards

```javascript
dealer.getAmountOfRemainingCards();
```

### Loading with require.js (AMD support)

```javascript
requirejs(['jscarddealer'], function(JSCardDealer){
	var cardWerewolf = new JSCardDealer.Card('Werewolf');
	var cardVilager  = new JSCardDealer.Card('Villager');
	var cardDrunk    = new JSCardDealer.Card('Drunk');
	var cardSeer     = new JSCardDealer.Card('Seer');
}
```

## Examples

* simple.html: simple example of basic usage
* requirejs.html: simple example using require.js
* poker.html: generate 5 cards and uses third party code to evaluate generated hand

### Unit test: test/index.html (qUnit)

### License: LGPLv2