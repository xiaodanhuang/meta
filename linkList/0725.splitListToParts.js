/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let node = root
    let len = 0
    while(node !== null) {
        node =node.next
        len++
    }
    let remain = len % k
    let num = (len- remain) /k
    let arr = []
    node = root
    while(k > 0) {
        let dummy = new ListNode(0)
        dummy.next = node
        let currentNode= dummy
        let add = remain > 0 ? 1 : 0
        for(let i =0;i<num+add;i++) {
            currentNode = currentNode.next
        }
        let next = currentNode && currentNode.next ?currentNode.next : null
        if(currentNode) {
            currentNode.next = null
        }
        node = next
        arr.push(dummy.next ? dummy.next : null)
        k--
        remain--
    }
    return arr
};

function ListNode(val) {
    this.val = val
    this.next = null
}
let a = new ListNode(1)
a.next= new ListNode(2)
a.next.next = new ListNode(3)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)
a.next.next.next.next.next = new ListNode(6)
a.next.next.next.next.next.next = new ListNode(7)

console.log(splitListToParts(a,3))