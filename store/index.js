const data = require("./data.json") || [];
const leitnerSequence = require("./leitnerSequence");

function cardIdsToReviewToday() {
  const levelsToReview = leitnerSequence[data.sequenceNum % 64];
  return Object.keys(data.cards).filter(id =>
    levelsToReview.includes(data.cards[id].level)
  );
}

module.exports = { cardIdsToReviewToday };
