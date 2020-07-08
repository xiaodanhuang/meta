/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let result = 0
    while (head) {
        result = result * 2 + head.val
        head = head.next
    }
    return result
};

function ListNode(val) {
    this.val = val
    this.next = null
}

let a = new ListNode(1)
a.next = new ListNode(0)
a.next.next = new ListNode(1)

console.log(getDecimalValue(a))