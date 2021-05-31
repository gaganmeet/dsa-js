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
  let arr = str.split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      if (obj.hasOwnProperty(arr[i])) {
        let temp = obj[arr[i]];
        obj[arr[i]] = temp + 1;
      }
    }
  }
  //console.log(obj);
  let cs = obj["7"];
  let cf = obj["4"];
  if (cs === undefined) cs = 0;
  if (cf === undefined) cf = 0;
  if (cs + cf == 4 || cs + cf == 7) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
