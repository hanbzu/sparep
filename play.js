const store = require("./store");

module.exports = function play() {
  console.log("PLAY", store.getCards());
};
