// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        if(obj.isPalindrome(head)){
            console.log("1");
        }
        else{
            console.log("0");
        }
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @returns {boolean}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to check whether the list is palindrome.
    isPalindrome(head)
    {
        function reverse(node){
            let prevNode = null
            let currNode = node
            let nextNode = null
            while(currNode){
                nextNode = currNode.next
                currNode.next = prevNode
                prevNode = currNode
                currNode = nextNode
            }
            return prevNode
        }
        let res = true
        let slow = head
        let fast = head
        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        let temp = slow
        temp = slow.next
        slow.next = null
        slow = temp
        slow = reverse(slow)
        fast = head
        while(slow && fast){
            if(slow.data !== fast.data) return false
            slow = slow.next
            fast = fast.next
        }
        return true
    }
    
}