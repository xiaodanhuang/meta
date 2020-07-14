/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let map = new Map()
    let node = head
    let index = 0
    while (node) {
        map.set(index, node)
        node = node.next
        index++
    }
    node = new ListNode(0)
    for (let i = 0, j = index; i < index / 2; i++, j--) {
        node.next = map.get(i)
        node.next.next = i == j - 1 ? null : map.get(j - 1)
        node = node.next.next
        node.next = null
    }
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

console.log(reorderList(a))
console.log(a)