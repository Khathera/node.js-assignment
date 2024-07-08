const sentence = require("./Second.js");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./text/text.txt", "utf8");
sentence();
console.log(first);
