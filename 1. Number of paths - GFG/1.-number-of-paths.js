// { Driver Code Starts
//Initial Template for javascript

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

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar0 = readLine().split(' ').map(x=>parseInt(x));  
    let m = input_ar0[0];
    let n = input_ar0[1];
    let obj = new Solution();
    let ans = obj.numberOfPaths(m,n);
    console.log(ans);
  }
}// } Driver Code Ends


//User function Template for javascript


/**
 * @param {Number} m
 * @param {Number} n
 * @returns {Number}
*/
 
class Solution {
    numberOfPaths(m,n){
        function countWays(m,n,i,j){
            if(i==m&&j==n) return 1
            if(i>m || j>n) return 0
            return countWays(m,n,i+1,j) + countWays(m,n,i,j+1)
        }
        return countWays(m,n,1,1)
    }
}