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

  function partition(arr, lo, hi, pivot) {
    let i = lo,
      j = lo;
    while (i <= hi) {
      if (arr[i] > pivot) {
        i++;
      } else {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
        i++;
      }
    }
    return j - 1;
  }

  function quickSort(arr, lo, hi) {
    if (lo >= hi) return;

    let pivot = arr[hi];
    let piv = partition(arr, lo, hi, pivot);

    quickSort(arr, lo, piv - 1);
    quickSort(arr, piv + 1, hi);
  }
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
}
