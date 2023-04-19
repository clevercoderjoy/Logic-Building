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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if(l1 == null || l2 == null){
            if(l1 == null)
                return l2;
            else
                return l1;
        }
        ListNode c1 = reverse(l1);
        ListNode c2 = reverse(l2);
        int c = 0;
        ListNode head = new ListNode(-1);
        ListNode itr = head;
        while(c1 != null || c2 != null || c != 0){
            int sum = c + (c1 != null ? c1.val : 0) + (c2 != null ? c2.val : 0);
            int ld = sum % 10;
            c = sum / 10;
            itr.next = new ListNode(ld);
            itr = itr.next;
            if(c1 != null)
                c1 = c1.next;
            if(c2 != null)
                c2 = c2.next;
        }
        return reverse(head.next);
    }
    
    public ListNode reverse(ListNode head){
        
        ListNode prev = null;
        while(head != null){
            ListNode nextNode = head.next;
            head.next = prev;
            prev = head;
            head = nextNode;
        }
        return prev;
    }
}