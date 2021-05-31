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
  let t = readline();
  t = Number(t);
  while (t-- > 0) {
    let input = readline();
    let arr = input.split(" ");
    let x = Number(arr[0]);
    let m = Number(arr[1]);
    let d = Number(arr[2]);
    let time = Math.min(x * m, x + d);
    console.log(time);
  }
}
