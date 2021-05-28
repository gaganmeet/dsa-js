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
  let str = readline();
  let arr = str.split('');
  let res = "";
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ".") {
      res += "0";
    }
    if (arr[i] == "-") {
      if (arr[i + 1] == "-") res += "2";
      else res += "1";
      i++;
    }
  }
  console.log(res);
}
