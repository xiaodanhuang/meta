/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针可找中点
var isPalindrome = function (head) {
  let fast = head
  let slow = head
  // 快慢指针可求中点
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  //反转链表
  let reverseHead = null
  let currentNode = slow
  while (currentNode) {
    let node = currentNode.next
    currentNode.next = reverseHead
    reverseHead = currentNode
    currentNode = node
  }
  // 对比
  while(reverseHead && head) {
    if(reverseHead.val === head.val) {
      reverseHead = reverseHead.next
      head = head.next
    }
    else {
      return false
    }
  }
  return true
}

var a = new ListNode(1)
a.next = new ListNode(2)
a.next.next = new ListNode(2)


console.log(isPalindrome(a))