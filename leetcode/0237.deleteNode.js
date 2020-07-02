/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//  如何让自己在世界上消失，但又不死？ —— 将自己完全变成另一个人，再杀了那个人就行了。真秀
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};