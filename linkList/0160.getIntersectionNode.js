/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let map = new Map()
    let a = headA
    let b = headB
    while (a) {
        map.set(a, a)
        a = a.next
    }
    while (b) {
        if (map.get(b)) {
            return b
        } else {
            b = b.next
        }
    }
    return null
};