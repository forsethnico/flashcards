const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  prepareGame() {
    const data = prototypeQuestions;
    const cards = data.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer)
    });
    this.currentDeck = new Deck(cards);
    this.currentRound= new Round(this.currentDeck);
  };

  start() {
    this.prepareGame();
    this.printMessage(this.currentDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  };
};

module.exports = Game;
