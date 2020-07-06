/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head.next === null) return  head
    let fast = head.next
    let slow =head
    let odd = head.next
    while(fast && fast.next) {
        slow.next = fast.next
        fast.next = slow.next.next
        slow.next.next = odd
        fast = fast.next
        slow = slow.next
    }
    return head
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let a =  new ListNode(1)
a.next =  new ListNode(2)
a.next.next =  new ListNode(3)
a.next.next.next =  new ListNode(4)
a.next.next.next.next =  new ListNode(5)

console.log(oddEvenList(a))