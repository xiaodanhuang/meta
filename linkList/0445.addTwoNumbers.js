/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 =  l1
    let node2 = l2
    let arr1 = []
    let arr2  =[]
    let dummy = new ListNode(0)
    let pos = 0
    while (node1) {
        arr1.push(node1)
        node1 = node1.next
    }
    while (node2) {
        arr2.push(node2)
        node2  = node2.next
    }
    for (let i =arr1.length-1,j= arr2.length-1 ; i>=0 && j>=0;i-- ,j--){
        let number = arr1[i].val + arr2[j].val + pos
        let node = new ListNode(number%10)
        pos = (number -number%10)/10
        node.next = dummy.next
        dummy.next = node
        arr1.pop()
        arr2.pop()
    }
    let arr =  arr1.length ? arr1 :arr2
    for(let i =arr.length-1;i>=0;i--){
        let number = arr[i].val + pos
        let node = new ListNode(number%10)
        pos = (number -number%10)/10
        node.next = dummy.next
        dummy.next = node
        arr.pop()
    }
    if(pos> 0) {
        let node = new ListNode(1)
        node.next = dummy.next
        dummy.next = node
    }
    return dummy.next
};
function ListNode(val) {
    this.val = val
    this.next = null
}
let a = new ListNode(0)

let b = new ListNode(7)
b.next = new ListNode(3)
console.log(addTwoNumbers(a,b))