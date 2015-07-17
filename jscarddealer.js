/*****************************************************************
 *
 * JSCardDealer
 *
 * Written by Glennn De Backer <glenn at simplicity dot be>.
 *
 *****************************************************************/
/****************************
 * JSCardDealer
 ****************************/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.JSCardDealer = factory();
    }
}(this, function() {
    "use strict";

    var JSCardDealer = {};

    /***************************************
     * Card
     ***************************************/
    function Card(value) {
        // store value
        this.value = value;
        this.property = {};
    };

    /**
     * Get value
     */
    Card.prototype.getValue = function() {
        return this.value;
    };

    /**
     * Set card property
     */
    Card.prototype.setProperty = function(propertyName, propertyValue) {
        this.property[propertyName] = propertyValue;
    }

    /**
     * Get card property
     */
    Card.prototype.getProperty = function(propertyName) {
        return this.property[propertyName];
    }

    /***************************************
     * Deck
     ***************************************/

    /**
     * Card Deck constructor
     */
    function Deck() {
        // init empty array set
        this.deck = [];
    };

    /**
     * Set cards
     */
    Deck.prototype.assignCards = function(cards){
        this.deck = cards;
    }

    /**
     * Add card to set 
     */
    Deck.prototype.addCard = function(card) {
        this.deck.push(card);
    };

    /**
     * Get cards in set
     */
    Deck.prototype.getCards = function() {
        return this.deck;
    };

    /**
     * Combine deck with another deck 
     */
    Deck.prototype.combineWith = function(deck){
        this.deck = this.deck.concat(deck.deck);
    };
    
    /**
     * Get number of cards in deck
     */
    Deck.prototype.getNumberOfCards = function(){
        return this.deck.length;
    };

    /***************************************
     * Dealer
     ***************************************/

    /**
     * Constructor
     */
    function Dealer(cardDeck) {
        if (cardDeck !== undefined){
            this.assignDeck(cardDeck);
        }
    };
    
    /**
     * Assign deck to dealer
     */
    Dealer.prototype.assignDeck = function(cardDeck){
        // init internal variables
        this.cardDeck = cardDeck;
        this.workingSet = null;
        this.numberOfCards = cardDeck.deck.length;
        this.cardIndex = 0;        
    };

    /**
     * Start new game
     */
    Dealer.prototype.newGame = function() {
        // copy cardset to workingset
        this.workingSet = this.cardDeck.deck;

        // reset card index
        this.cardIndex = 0;
    };

    /**
     * Shuffle cards
     */
    Dealer.prototype.shuffleCards = function(amount) {

        // if no amount parameter was given set it to 1
        if (amount === undefined) amount = 1;

        // if workingset is null
        if (this.workingSet == null) {
            // start new game
            this.newGame();
        }

        // shuffle the deck amount times
        for (var i = 0; i < amount; i++) {

            // fisher yates shuffle see - http://bost.ocks.org/mike/shuffle/
            var m = this.workingSet.length,
                t, y;

            // While there remain elements to shuffle…
            while (m) {

                // Pick a remaining element…
                y = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = this.workingSet[m];
                this.workingSet[m] = this.workingSet[y];
                this.workingSet[y] = t;
            }
        }
    };

    /**
     * Deal card
     */
    Dealer.prototype.dealCard = function() {
        
        // if workingset is null
        if (this.workingSet == null) {
            // start new game
            this.newGame();
        }
        
        var i = this.cardIndex;

        if (this.cardIndex < this.numberOfCards) {
            // lifo
            var idx = (this.numberOfCards -1) - this.cardIndex;

            // increase cardIndex
            this.cardIndex++;

            // return selected card
            return this.workingSet[idx];
        } else {
            return null;
        }
    };

    /**
     * Get number of remaining card
     */
    Dealer.prototype.getAmountOfRemainingCards = function() {
        return this.numberOfCards - this.cardIndex;
    };

    /**
     * Get remaining cards in deck
     */
    Dealer.prototype.getRemainingCards = function(){
        return this.workingSet;
    }

    JSCardDealer.Dealer = Dealer;
    JSCardDealer.Deck = Deck;
    JSCardDealer.Card = Card;

    return JSCardDealer;
}));