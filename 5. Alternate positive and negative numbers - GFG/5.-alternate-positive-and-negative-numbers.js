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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    let res = obj.rearrange(arr,n);
    printArray(res,res.length);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number[]}
 */

class Solution{
    rearrange(arr,n){
        const positive = []
        const negative = []
        for(let num of arr){
            if(num<0) negative.push(num)
            else positive.push(num)
        }
        let res = []
        let j = 0
        let k = 0
        function getValues(){
            for(let i=0;i<n;i++){
                if(j===positive.length || k===negative.length) break
                if(i%2===0){
                    res.push(positive[j])
                    j++
                } else{
                    res.push(negative[k])
                    k++
                }
            }
        }
        getValues()
        if(j<positive.length){
            while(j<positive.length){
                res.push(positive[j])
                j++
            }
        }
        if(k<negative.length){
            while(k<negative.length){
                res.push(negative[k])
                k++
            }
        }
        return res
    }
}