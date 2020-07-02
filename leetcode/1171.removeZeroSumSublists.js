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

var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let sum = 0
    let map = new Map()
    for (let d = dummy; d !== null; d = d.next) {
        sum += d.val
        map.set(sum, d)
    }
    sum = 0
    for(let d = dummy; d!== null ; d= d.next) {
        sum +=d.val
        d.next = map.get(sum).next
    }
    return dummy.next
};

