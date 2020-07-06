/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let fast = head
    let slow = head
    let d = dummy
    while (fast && fast.next) {
        d.next = fast.next
        let currentNode = fast.next.next
        d.next.next = slow
        slow.next = currentNode
        d = d.next.next
        fast = d.next
        slow = d.next
    }
    return dummy.next
};