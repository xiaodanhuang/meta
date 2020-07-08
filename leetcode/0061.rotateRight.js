/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let dummy = new ListNode(0)
    dummy.next = head
    let d = head
    let len = 0
    while (d) {
        d = d.next
        len++
    }
    len = len - k % len
    d = head
    while (len > 1) {
        d = d.next
        len--
    }
    if (d && d.next) {
        let currentNode = dummy.next
        dummy.next = d.next
        d.next = null
        let node = dummy.next
        while (node && node.next) {
            node = node.next
        }
        node.next = currentNode
    }
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
console.log(rotateRight(a, 10))
