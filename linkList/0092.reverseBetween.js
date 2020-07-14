/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let dummy = new ListNode(0)
    let reverse = new ListNode(0)
    let d = dummy
    dummy.next = head
    let number = 1
    let start = null, end = null
    let firstNode = null
    while (d && d.next) {
        if (number >= m && number <= n) {
            start = number === m ? d : start
            firstNode = number === m ? d.next : firstNode
            end = number === n ? d.next.next : end
            let currentReverse = reverse.next
            reverse.next = d.next
            d.next = d.next.next
            reverse.next.next = currentReverse
        } else {
            d = d.next
        }
        number++
    }
    start.next = reverse.next
    firstNode.next = end
    return dummy.next
};
