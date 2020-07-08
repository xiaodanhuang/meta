/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let node = dummy
    let insertNode = new ListNode(0)
    while(node && node.next){
        let cur = insertNode
        let isInsert =false
        while (cur && cur.next) {
            if(node.next.val < cur.next.val) {
                let currentCur = cur.next
                cur.next = node.next
                node.next = node.next.next
                cur.next.next = currentCur
                isInsert = true
            } else {
                cur =cur.next
            }
        }
        if(!isInsert) {
            cur.next = node
        }
        node = node.next
    }
    return dummy.next
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let a = new ListNode(4)
a.next = new ListNode(2)
a.next.next = new ListNode(1)
a.next.next.next = new ListNode(3)

console.log(insertionSortList(a))
