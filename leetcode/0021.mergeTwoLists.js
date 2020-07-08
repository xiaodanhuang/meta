/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let node = new ListNode(0)
    let currentNode = node
    let l1Head = l1
    let l2Head = l2
    while (l1Head && l2Head) {
        if (l1Head.val < l2Head.val) {
            currentNode.next = l1Head
            l1Head = l1Head.next
        } else {
            currentNode.next = l2Head
            l2Head = l2Head.next
        }
        currentNode = currentNode.next
    }
    if (l1Head) {
        currentNode = l1Head
    }
    if (l2Head) {
        currentNode = l2Head
    }
    return node.next

};