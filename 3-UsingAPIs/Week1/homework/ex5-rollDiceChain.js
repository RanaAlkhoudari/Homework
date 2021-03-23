// ex5-rollDiceChain.js
// Challenge: throw five dices in sequence
const rollDice = require('../../helpers/pokerDiceRoller');
function rollTheDices() {
  const results = [];
  // TODO: expand the chain to include five dices
  rollDice(1)
    .then((value) => {
      results.push(value);
      return rollDice(2);
    })
    .then((value2) => {
      results.push(value2);
      return rollDice(3);
    })
    .then((value3) => {
      results.push(value3);
      return rollDice(4);
    })
    .then((value4) => {
      results.push(value4);
      return rollDice(5);
    })
    .then((value5) => {
      results.push(value5);
    })
    .then(() => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}
rollTheDices();
// ! Do not change or remove the code below
module.exports = rollTheDices;
