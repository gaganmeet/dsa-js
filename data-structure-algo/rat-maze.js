/*
1. You are given a number n and a number m representing number of rows and columns in a maze.
2. You are standing in the top-left corner and have to reach the bottom-right corner. Only two moves are allowed 'h' (1-step horizontal) and 'v' (1-step vertical).
3. Complete the body of getMazePath function - without changing signature - to get the list of all paths that can be used to move from top-left to bottom-right.
Use sample input and output to take idea about output.

Input Format
A number n
A number m
Output Format
Contents of the arraylist containing paths as shown in sample output

Constraints
0 <= n <= 10
0 <= m <= 10
Sample Input
3
3
Sample Output
[hhvv, hvhv, hvvh, vhhv, vhvh, vvhh]
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

function main() {
  let n = Number(readline());
  let m = Number(readline());
  let arr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(1);
    }
    arr.push(temp);
  }
  function getPaths(arr, i, j, n, m, res, psf) {
    if (i == n - 1 && j == m - 1) {
      res.push(psf);
      return;
    }
    if (i < 0 || i >= n || j < 0 || j >= m || arr[i][j] != 1) {
      return;
    }
    arr[i][j] = 0;
    getPaths(arr, i, j + 1, n, m, res, psf + "h");
    getPaths(arr, i + 1, j, n, m, res, psf + "v");
    arr[i][j] = 1;
  }
  let res = [];
  getPaths(arr, 0, 0, n, m, res, "");
  console.log(res);
}
