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
  for (let i = 0; i <= n; i++) dp.push(0);
  let ans = top_down(n, dp);
  console.log("Using top-down DP", ans);
  let ans2 = bottom_up(n);
  console.log("Using bottom-up DP", ans2);
}

function top_down(n, dp) {
  if (dp[n] !== 0) return dp[n];
  if (n <= 1) {
    return n;
  }
  dp[n] = top_down(n - 1, dp) + top_down(n - 2, dp);
  return dp[n];
}

function bottom_up(n) {
  let dp = [];
  dp.push(0);
  dp.push(1);
  for (let i = 2; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
}
