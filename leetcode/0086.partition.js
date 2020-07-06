/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy = new ListNode(0)
    let d = dummy
    dummy.next  = head
    let big =null
    let small = new ListNode(0)
    let currentSmall = small
    while(d && d.next) {
        if (d.next.val >= x) {
            big = big ? big : d.next
            d = d.next
        } else {
            currentSmall.next =d.next
            if(big) {
                d.next = d.next.next
                dummy.next = small.next
                currentSmall.next.next = big
            }
            currentSmall =currentSmall.next
            d =d.next
        }
    }
    return dummy.next
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let  a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(2)
a.next.next.next.next = new ListNode(5)
a.next.next.next.next.next = new ListNode(2)
console.log(partition(a,2))
