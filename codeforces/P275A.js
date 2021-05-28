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
  let matrix = [];
  for (let i = 0; i < 3; i++) {
    let arr;
    let str = readline();
    arr = str.split(" ");
    matrix.push(arr);
  }
  let lights = [
    ["1", "1", "1"],
    ["1", "1", "1"],
    ["1", "1", "1"],
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] % 2 == 1) {
        if (lights[i][j] == 1) lights[i][j] = "0";
        else lights[i][j] = "1";
        if (i > 0) {
          if (lights[i - 1][j] == 0) lights[i - 1][j] = "1";
          else lights[i - 1][j] = "0";
        }
        if (i < 2) {
          if (lights[i + 1][j] == 0) lights[i + 1][j] = "1";
          else lights[i + 1][j] = "0";
        }
        if (j > 0) {
          if (lights[i][j - 1] == 0) lights[i][j - 1] = "1";
          else lights[i][j - 1] = "0";
        }
        if (j < 2) {
          if (lights[i][j + 1] == 0) lights[i][j + 1] = "1";
          else lights[i][j + 1] = "0";
        }
      }
    }
  }
  let res = "";
  for (let i = 0; i < 3; i++) {
    console.log(lights[i][0] + lights[i][1] + lights[i][2]);
  }
  //console.log(lights);
}
