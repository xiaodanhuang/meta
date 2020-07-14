/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let node = new ListNode(0)
    node.next = head
    let cur = new ListNode(0)
    while (node && node.next) {
        let beforeNode = findBeforeNode(cur, node.next)
        beforeNode = beforeNode ? beforeNode : cur
        let next = beforeNode.next
        beforeNode.next = node.next
        node.next = node.next.next
        beforeNode.next.next = next
    }
    return cur.next
};

function findBeforeNode(cur, node) {

    while (cur && cur.next) {
        if (cur.next.val > node.val) {
            return cur
        }
        cur = cur.next
    }
    return cur
}

function ListNode(val) {
    this.val = val
    this.next = null
}

let a = new ListNode(4)
a.next = new ListNode(2)
a.next.next = new ListNode(1)
a.next.next.next = new ListNode(3)

console.log(insertionSortList(a))
