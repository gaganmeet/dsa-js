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
  let m = Number(readline());
  let arr = [];
  let dp = [];

  for (let i = 0; i < n; i++) {
    let temp;
    let temp2 = [];
    let input = readline();
    temp = input.split(" ");
    temp = temp.map((x) => Number(x));
    arr.push(temp);
    for (let j = 0; j < m; j++) temp2.push(0);
    dp.push(temp2);
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (i == n - 1 && j == m - 1) dp[i][j] = arr[i][j];
      else if (i == n - 1) dp[i][j] = arr[i][j] + dp[i][j + 1];
      else if (j == m - 1) dp[i][j] = arr[i][j] + dp[i + 1][j];
      else dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + arr[i][j];
    }
  }
  console.log(dp[0][0]);
}
