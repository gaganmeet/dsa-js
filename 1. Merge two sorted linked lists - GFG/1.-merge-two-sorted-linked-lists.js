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

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for(let i=1;i<m;i++){
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let obj = new Solution();
        let res = obj.sortedMerge(head1, head2);
        printlist(res);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
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
    //Function to merge two sorted linked list.
    sortedMerge(list1, list2) {
    if(!list1 || !list2) return !list1?list2:list1
	let prev = new Node(-1)
	let head = prev
	while(list1&&list2){
		if(list1.data<list2.data){
			prev.next = list1
			list1 = list1.next
		} else {
			prev.next = list2
			list2 = list2.next
		}
		prev = prev.next
	}
	prev.next = !list1?list2:list1
	return head.next
    }
}