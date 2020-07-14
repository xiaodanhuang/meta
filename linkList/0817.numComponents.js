/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    let dummy = new ListNode(0)
    dummy.next = head
    let node = dummy
    let result  = 0
    let lastIndex = -1
    while (node && node.next) {
        let index = G.indexOf(node.next.val)
        if(index >-1) {
            lastIndex = index
        } else {
            result += lastIndex === -1 ? 0 :1
        }
        lastIndex = index
        node = node.next
    }
    result += lastIndex === -1 ? 0 :1
    return result
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let a = new ListNode(0)
a.next= new ListNode(1)
a.next.next = new ListNode(2)
a.next.next.next = new ListNode(3)
a.next.next.next.next = new ListNode(4)

console.log(numComponents(a,[0,3,1,4]))