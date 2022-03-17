'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

console.log(player0El, player1El);

// Giving Default Values
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
diceEl.classList.add('hidden');

const score = [0,0]
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click' , function(){
    // 1. Genrating Random Number
    const dice = Math.trunc(Math.random()*6+1);
    // 2. Making Correct dice png visible
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`
    // 3. Check if number === 1, If yes switch the player
    if(dice !== 1){
        // Adding Score into current score board
        currentScore = currentScore + dice ; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    }
    else{
        // Swapping the active player !
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})

// Hold Button Functions and Workings
btnHold.addEventListener('click', function(){
    // Adding Current score to active player score !
    score[activePlayer] += currentScore 
    //Updating current score on Players Score Board !
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    currentScore = 0;
    //changing active player and according background !
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
})

// New Game Button Functions and Working
btnNew.addEventListener('click', function(){
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
diceEl.classList.add('hidden');
})
