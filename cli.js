#!/usr/bin/env node
const play = require("./play");
const stats = require("./stats");
const add = require("./add");
const [, , cmd, ...args] = process.argv;

switch (cmd) {
  case "stats":
    return stats();
  case "add":
    return add(args);
  case "play":
  case undefined:
    return play();
  default:
    console.log(`
$ sparep [play]                      Plays cards for today
$ sparep add "Unicorns are {real}"   Add a new card
$ sparep stats                       Show stats
`);
}
