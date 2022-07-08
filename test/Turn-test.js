const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn1, turn2, card1, card2

  beforeEach(() => {
      card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
      turn1 = new Turn('sea otter', card1);
      turn2 = new Turn('pug', card1);
  });

    it('should be a function', function() {
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
      expect(turn1).to.be.an.instanceof(Turn);
    });

    it('should store a users guess to question', function() {
      expect(turn1.guess).to.equal('sea otter')
    });

    it('should store the current card in play', function() {
      expect(turn1.currentCard).to.equal(card1)
    });

    it('should have a method that returns the guess', function() {
      expect(turn1.returnGuess()).to.equal('sea otter')
    });

    it('should have a method that returns the card', function() {
      expect(turn1.returnCard()).to.equal(card1)
    });

    it('should have a method that evaluates the guess', function() {
      expect(turn1.evaluateGuess()).to.equal(true)
      expect(turn2.evaluateGuess()).to.equal(false)
    });

    it('should have a method to give feedback on the result', function() {
      expect(turn1.giveFeedback()).to.equal('correct!')
      expect(turn2.giveFeedback()).to.equal('incorrect!')
    });
});
