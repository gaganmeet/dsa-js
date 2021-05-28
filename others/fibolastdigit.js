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
  let fib = fibCalc(60);

  let digit = fib[(n - 1) % 60];
  if (digit % 2 != 0) {
    console.log("Alive");
  } else {
    console.log("Dead");
  }
}

function fibCalc(n) {
  let fib = [];
  fib.push(0);
  fib.push(1);
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]) % 10;
  }
  return fib;
}
