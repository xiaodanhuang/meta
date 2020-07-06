/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    let dummy = new ListNode(0)
    let d = dummy
    let node = head
    while (node){
        d.next =  new ListNode(node.val)
        map.set(node,d.next)
        d = d.next
        node = node.next
    }
    d = dummy
    node = head
    while(node){
        d.next.random = map.get(node.random)
        d= d.next
        node = node.next
    }
    return dummy.next
};

