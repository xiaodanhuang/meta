/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast= fast.next.next
        if(slow === fast) {
            return slow
        }
    }
    return null
};