/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        copyList(head);
        copyRandomPointers(head);
        return getOriginalList(head);
    }
    
    public void copyList(Node head){
        Node curr = head;
        while(curr != null){
            Node fwd = curr.next;
            Node node = new Node(curr.val);
            curr.next = node;
            node.next = fwd;
            curr = fwd;
        }
    }
    
    public void copyRandomPointers(Node head){
        Node curr = head;
        while(curr != null){
            Node random = curr.random;
            if(random != null){
                curr.next.random = random.next;
            }
            curr = curr.next.next;
        }
    }
    
    public Node getOriginalList(Node head){
        Node dummyHead = new Node(-1);
        Node prev = dummyHead;
        Node curr = head;
        while(curr != null){
            prev.next = curr.next;
            curr.next = curr.next.next;
            curr = curr.next;
            prev = prev.next;
        }
        return dummyHead.next;
    }
}









