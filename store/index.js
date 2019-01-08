const data = require("./data.json") || [];
const leitnerSequence = require("./leitnerSequence");

function getCards() {
  return data.cards;
}

module.exports = { getCards };
