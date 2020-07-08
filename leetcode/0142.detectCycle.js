/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let node = head
    let map = new Map()

    while (node) {
        if (map.get(node)) {
            return node
        }
        map.set(node, node)
        node = node.next
    }
    return null
};