/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let max = new ListNode(0)
    let maxNode = max
    let min = new ListNode(0)
    let minNode = min
    let node = head
    while (node) {
        if (node.val < x) {
            minNode.next = node
            minNode = minNode.next
        } else {
            maxNode.next = node
            maxNode = maxNode.next
        }
        node = node.next
    }
    maxNode.next = null
    minNode.next = max.next
    return min.next
};

function ListNode(val) {
    this.val = val
    this.next = null
}

let a = new ListNode(2)
a.next = new ListNode(1)
console.log(partition(a, 2))
