const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

    it('should be a function', function() {
      expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
      expect(round).to.be.an.instanceof(Round);
    });

    it('should have a deck with an array of cards', function () {
      expect(round.deck).to.deep.equal([card1, card2, card3])
    });

    it('should return the first card as the current card', function() {
      expect(round.returnCurrentCard()).to.deep.equal(card1)
    });

    it('should have an initial turn count of 0', function() {
      expect(round.turns).to.equal(0);
    });

    it('should have a method to increase turn count each turn', function() {
      round.takeTurn('guess');
      expect(round.turns).to.equal(1);
    });

    it('should store incorrect guesses by ID as an array', function() {
      expect(round.takeTurn('spleen')).to.equal('incorrect!')
      expect(round.incorrectGuesses).to.deep.equal([1])
    });

    it('should evaluate a correct guess', function() {
      expect(round.takeTurn('sea otter')).to.equal('correct!')
      expect(round.incorrectGuesses).to.deep.equal([]);
    })

    it('should make the next card the new current card', function (){
      round.takeTurn('sea otter')
      expect(round.returnCurrentCard()).to.equal(card2)
    });

    it('should calculate percent of correct guesses', function() {
      round.takeTurn('sea otter')
      round.takeTurn('spleen')
      expect(round.calculatePercentCorrect()).to.equal(50)
    });
});
