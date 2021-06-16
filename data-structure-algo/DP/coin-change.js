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
  let coins = [1, 7, 10];
  let dp = [];
  for (let i = 0; i <= n; i++) dp.push(0);
  let dp2 = [...dp];
  let ans = top_down(n, coins, dp);
  console.log("Using top-down DP", ans);
  let ans2 = bottom_up(n, coins, dp2);
  console.log("Using bottom-up DP", ans2);
}

function top_down(n, coins, dp) {
  if (dp[n] !== 0) return dp[n];
  if (n === 0) {
    return 0;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for (let coin of coins) {
    if (n - coin >= 0) {
      let sub_prob = top_down(n - coin, coins, dp);
      ans = Math.min(ans, sub_prob + 1);
    }
  }
  dp[n] = ans;
  return dp[n];
}

function bottom_up(n, coins, dp) {
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[n];
}
