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
  let arr = input.split(" ").map((x) => Number(x));

  function merge(a, b) {
    let i = 0,
      j = 0;
    let res = [];
    while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
        res.push(a[i]);
        i++;
      } else {
        res.push(b[j]);
        j++;
      }
    }
    while (i < a.length) {
      res.push(a[i]);
      i++;
    }
    while (j < b.length) {
      res.push(b[j]);
      j++;
    }
    return res;
  }
  function mergeSort(arr, lo, hi) {
    if (lo == hi) {
      let ba = [];
      ba.push(arr[lo]);
      return ba;
    }
    let mid = Math.floor((lo + hi) / 2);
    let fa = mergeSort(arr, lo, mid);
    let sa = mergeSort(arr, mid + 1, hi);

    let res = merge(fa, sa);
    return res;
  }
  let sortedArr = mergeSort(arr, 0, arr.length - 1);
  console.log(sortedArr);
}
