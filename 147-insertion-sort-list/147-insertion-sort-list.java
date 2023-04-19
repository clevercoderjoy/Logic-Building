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
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy = new ListNode(0);
        while(head != null){
            ListNode nextNode = head.next;
            ListNode temp = dummy;
            while(temp.next != null && temp.next.val < head.val){
                temp = temp.next;
            }
            head.next = temp.next;
            temp.next = head;
            head = nextNode;
        }
        return dummy.next;
    }
}