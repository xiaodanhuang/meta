/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let reverseHead = null
    let currentNode = head
    while (currentNode) {
        let node = currentNode.next
        currentNode.next = reverseHead
        reverseHead = currentNode
        currentNode = node
    }
    return reverseHead
};
