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
  let coins = [1, 3, 4];
  let dp = [];
  for (let i = 0; i <= n; i++) dp.push(0);
  let ans2 = bottom_up(n, coins, dp);
  console.log("Using bottom-up DP", ans2);
}

function bottom_up(n, coins, dp) {
  dp[0] = 1;
  for (let i = 0; i <= n; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin];
      }
    }
  }
  return dp[n];
}
