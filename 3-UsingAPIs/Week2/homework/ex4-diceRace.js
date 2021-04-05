'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  return Promise.race(dices.map((dice) => rollDice(dice)));
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const res = await rollTheDices();
    console.log('Resolved!', res);
  } catch (error) {
    console.log('Rejected!', error);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

//Promise.race() returns a Promise that settles as soon as one of the promises in the iterable argument settles.
//A settled Promise is a promise that either has resolved or rejected.
//But it doesn't mean stop the execution of the function.
