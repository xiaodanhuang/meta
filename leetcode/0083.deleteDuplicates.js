/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0)
    let map = new Map()
    dummy.next = head
    let d = dummy
    while(d && d.next) {
        if(map.get(d.next.val) !== d.next) {
            d.next = d.next ? d.next.next : null
        } else {
            map.set(d.next.val,d.next)
            d = d.next
        }
    }
    return dummy.next
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let  a = new ListNode(1)
a.next = new ListNode(1)
a.next.next = new ListNode(2)

console.log(deleteDuplicates(a))