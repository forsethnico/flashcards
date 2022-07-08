const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

    it('should keep track of the current round', function() {
      expect(game.currentRound).to.equal(null);
    });

    it('should create new round using the deck', function () {
      game.start();
      const currentDeck = game.currentRound.deck;
      
      expect(currentDeck.cards[0]).to.be.an.instanceof(Card);
      expect(currentDeck).to.be.an.instanceof(Deck);
      expect(currentDeck.cards.length).to.equal(30);
      expect(currentDeck.cards).to.deep.equal(prototypeQuestions);
    });
});
