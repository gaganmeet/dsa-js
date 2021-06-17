/*
1. You are given a number n, representing the number of stairs in a staircase.
2. You are on the 0th step and are required to climb to the top.
3. In one move, you are allowed to climb 1, 2 or 3 stairs.
4. You are required to print the number of different paths via which you can climb to the top.
Input Format :
  A number n
Output Format :
  A number representing the number of ways to climb the stairs from 0 to top.
*/
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
  let n = Number(readline());
  let dp = [];
  dp[0] = 1;
  for (let i = 0; i <= n; i++) dp.push(0);
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i - j >= 0) dp[i] += dp[i - j];
    }
  }
  console.log(dp[n]);
}
