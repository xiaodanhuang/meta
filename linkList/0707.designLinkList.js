function ListNode (val,next = null) {
    this.val = val
    this.next = next
}

var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.length < index+1) return null
    let node = this.head
    while (index>0 ) {
        node = node.next
        index --
    }
    return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val)
    node.next = this.head
    this.head = node
    if(this.length ===0)  this.tail = this.head
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val)
    let dummy = new ListNode(0)
    dummy.next = this.head
    let currentDummy = dummy
    while(currentDummy && currentDummy.next) {
        currentDummy = currentDummy.next
    }
    currentDummy.next = node
    this.length ++
    this.head = dummy.next
    this.tail = node
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let dummy = new ListNode(0)
    dummy.next =this.head
    let node = new ListNode(val)
    let currentDummy = dummy

    while(currentDummy && currentDummy.next) {
        if(index===0){
            node.next = currentDummy.next
            currentDummy.next = node
            this.length++
            return
        }
        currentDummy = currentDummy.next
        index --
    }
    currentDummy =node
    this.head = dummy.next
    this.length ++
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let dummy = new ListNode(0)
    dummy.next =this.head
    let node = dummy

    while(node && node.next) {
        if(index===0){
            node.next =node.next.next
            this.length --
            return
        }
        node =node.next
        index--
    }
    node.next = null
    this.head = dummy.next
    this.length --

};

let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
