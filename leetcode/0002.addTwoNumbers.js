/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let d = dummy
    let pos = 0
    while (l1 && l2) {
        let num = l1.val + l2.val + pos
        d.next = new ListNode(num % 10)
        pos = (num - num % 10) / 10
        d = d.next
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        let num = l1.val + pos
        d.next = new ListNode(num % 10)
        pos = (num - num % 10) / 10
        d = d.next
        l1 = l1.next
    }
    while (l2) {
        let num = l2.val + pos
        d.next = new ListNode(num % 10)
        pos = (num - num % 10) / 10
        d = d.next
        l2 = l2.next
    }
    if (pos) {
        d.next = new ListNode(pos)
    }

    return dummy.next
};
let a = new ListNode(0)


let b = new ListNode(3)
b.next = new ListNode(7)

function ListNode(val) {
    this.val = val
    this.next = null
}

console.log(addTwoNumbers(a, b))