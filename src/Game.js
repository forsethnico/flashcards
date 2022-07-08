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

  start() {
    const data = prototypeQuestions;
    const cards = data.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer)
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound)
    this.printQuestion(this.currentRound)
  };
};

module.exports = Game;
