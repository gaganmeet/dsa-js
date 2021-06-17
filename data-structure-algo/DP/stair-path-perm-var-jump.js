/* 
1. You are given a number n, representing the number of stairs in a staircase.
2. You are on the 0th step and are required to climb to the top.
3. You are given n numbers, where ith element's value represents - till how far from the step you 
     could jump to in a single move.  
     You can of course jump fewer number of steps in the move.
4. You are required to print the number of different paths via which you can climb to the top.
Input Format:
    A number n
    .. n more elements
Output Format:
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
  let input = readline();
  let jumps = input.split(" ");
  for (let i = 0; i < n; i++) jumps[i] = Number(jumps[i]);
  let dp = [];

  for (let i = 0; i <= n; i++) dp.push(0);
  dp[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 1; j <= jumps[i]; j++) {
      if (i + j <= n) {
        dp[i] += dp[i + j];
      }
    }
  }
  console.log(dp[0]);
}
