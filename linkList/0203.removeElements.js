/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummy = new ListNode(0)
    dummy.next = head
    let d = dummy
    while (d && d.next !== null) {
        if (d.next.val === val) {
            d.next = d.next.next ? d.next.next : null
        }
        d = d.next
    }
    return dummy.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

let a = new ListNode(1)
a.next = new ListNode(1)
a.next.next = new ListNode(1)

console.log(removeElements(a, 1))