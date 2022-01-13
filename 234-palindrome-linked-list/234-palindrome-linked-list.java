/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        boolean res = true;
        ListNode slow = head;
        ListNode fast = head;
        while(fast.next !=null && fast.next.next!= null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode temp = slow;
        temp = slow.next;
        slow.next = null;
        slow = temp;
        slow = reverse(slow);

        fast = head;

        while(slow!=null && fast!=null){
            if(slow.val != fast.val) return false;
            slow = slow.next;
            fast = fast.next;
        }
        return true;
    }
    public ListNode reverse(ListNode node){
        ListNode prevNode = null;
        ListNode currNode = node;
        ListNode nextNode = null;

        while(currNode != null){
            nextNode = currNode.next;

            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }
        node = prevNode;
        return node;
    }
}