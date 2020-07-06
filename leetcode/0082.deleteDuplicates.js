/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let d = head
    let map = new Map ()
    while (d && d.next) {
        if(d.val === d.next.val) {
            map.set(d.next.val, d.next)
            d.next = d.next.next
        } else {
            d = d.next
        }
    }
    d = dummy
    while (d && d.next) {
        if(map.get(d.next.val)){
            d.next = d.next.next
        } else {
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
a.next.next = new ListNode(1)
a.next.next.next = new ListNode(2)
a.next.next.next.next = new ListNode(3)
console.log(deleteDuplicates(a))
