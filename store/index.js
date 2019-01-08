const cards = require("./cards.json") || [];
const leitnerSequence = require("./leitnerSequence");

function getCards() {
  return cards;
}

module.exports = { getCards };
