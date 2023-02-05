//{ Driver Code Starts
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
    let n = parseInt(readLine());
    let Arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.findMaxSum(Arr,n);
    console.log(res);
  }

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number} 
*/

class Solution {
  findMaxSum(arr,n){
      if(n===1) return arr[0]
      if(n===2) return Math.max(arr[0],arr[1])
      let ans = [arr[0], Math.max(arr[0],arr[1])]
      for(let i=2;i<n;i++){
          ans.push(Math.max(ans[i-1], arr[i]+ans[i-2]))
      }
      return ans[n-1]
  }
}
