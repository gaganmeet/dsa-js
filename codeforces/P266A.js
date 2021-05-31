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
  let n = readline();
  let input = readline();
  let arr = input.split("");
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      ans++;
    }
  }
  console.log(ans);
}
