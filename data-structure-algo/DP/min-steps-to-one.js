/*
    Question : Min steps needed to get to 1 from n. You can only divide by 3, divide by 2 or subtract by 1
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
  for (let i = 0; i <= n; i++) dp.push(0);
  let ans = top_down(n, dp);
  console.log("Using top-down DP", ans);
  let ans2 = bottom_up(n);
  console.log("Using bottom-up DP", ans2);
}

function top_down(n, dp) {
  if (n == 1) return 0;
  if (dp[n] !== 0) return dp[n];
  let op1 = Number.MAX_SAFE_INTEGER,
    op2 = Number.MAX_SAFE_INTEGER,
    op3 = Number.MAX_SAFE_INTEGER;
  if (n % 3 === 0) {
    op1 = top_down(n / 3, dp);
  }
  if (n % 2 === 0) {
    op2 = top_down(n / 2, dp);
  }
  op3 = top_down(n - 1, dp);
  dp[n] = Math.min(Math.min(op1, op2), op3) + 1;
  return dp[n];
}

function bottom_up(n) {
  let dp = [];
  dp.push(0);
  dp.push(0);
  for (let i = 2; i <= n; i++) {
    let op1 = Number.MAX_SAFE_INTEGER,
      op2 = Number.MAX_SAFE_INTEGER,
      op3 = Number.MAX_SAFE_INTEGER;
    if (i % 3 === 0) op1 = dp[i / 3];
    if (i % 2 === 0) op2 = dp[i / 2];
    op3 = dp[i - 1];
    dp.push(Math.min(Math.min(op1, op2), op3) + 1);
  }
  return dp[n];
}
