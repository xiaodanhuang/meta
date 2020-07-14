/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let fast = dummy
    let last = dummy
    while (n && fast) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        fast = fast.next
        last = last.next
    }
    last.next = last.next ? last.next.next : null
    return dummy.next
};

function ListNode(val) {
    this.val = val
    this.next = null
}

let a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)
console.log(removeNthFromEnd(a, 2))
