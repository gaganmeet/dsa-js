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
  let input = readline();
  let n = Number(input);
  let input2 = readline();
  let arr = input2.split(" ");
  arr.sort((a, b) => Number(a) - Number(b));
  //console.log(arr);
  let sumarr = [];
  let l = 0;
  let r = n - 1;
  while (l < r) {
    sumarr.push(Number(arr[l]) + Number(arr[r]));
    l++;
    r--;
  }
  sumarr.sort((a, b) => a - b);
  let max = sumarr[sumarr.length - 1];
  let min = sumarr[0];
  console.log(max - min);
  //console.log(Math.abs(sum1 - sum2));
}
