"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();

function main() {
  let str = readline();
  let year = Number(str);
  year++;
  let set = new Set();
  while (set.size != 4) {
    str = String(year);
    for (let i of str) set.add(i);
    if (set.size == 4) break;
    year++;
    set.clear();
  }
  console.log(year);
}
