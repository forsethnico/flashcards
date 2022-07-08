# FlashCards

## Abstract
This is an application that simulates a set of flash cards through the command line. A user will be able to see the a deck of 30 different questions about array prototype methods, make guesses, and see a final score at the end of the round.

This project was written by Nicole Forseth - a Module 2 Front End Engineering student at the Turing School of Software and Design. 

## Working Application
Users are prompted for each question, have the opportunity to select an answer, and will be given feedback if the guess was correct or incorrect:

![flash cards gif](https://media.giphy.com/media/BDQvRf4ipGRCXFfdIj/giphy.gif)

At the end of the deck of cards, the user will be provided with a final score of the % correct:

![flash cards gif](https://media.giphy.com/media/UcmCt5UoPUOnpa6miK/giphy.gif)

## Technologies Used

The core learning goal of this project was to practice test driven development (TDD) by writing unit tests using Mocha testing framework and Chai assertion library to contribute to a partially constructured object-oriented application. The language used is Javascript. There are no front end HTML and CSS files since the application is run in the command line. 

## Install/Setup Instructions

On the top right corner of this page, click the **Fork** button.
Clone down the forked repo (from your GitHub) using the command ```git clone [remote-address]```. Once you have cloned the repo, change into the directory and install the library dependencies. Run:```npm install```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

To start playing the game, running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```
When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards then the round will end. 

(To check that you are in the root of the project, run ```pwd``` and you should see a path that ends with ```flashcards``` such as ```/Users/nicoleforseth/turing/mod2/flashcards```)
