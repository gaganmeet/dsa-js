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
  let ucount = 0;
  let lcount = 0;
  let s = "a";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) - s.charCodeAt(0) < 0) ucount++;
    else lcount++;
  }
  let res;
  if (ucount > lcount) res = str.toUpperCase();
  else res = str.toLowerCase();
  console.log(res);
}
