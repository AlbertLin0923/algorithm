// 83. 删除排序链表中的重复元素
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let current = head;

  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};


// 对于 a->b->c->d->e->f->g->h->i-> 链表，用一个辅助变量prev，
// 先存储下一个指针节点，
// 再把下一个指针指向上次遍历的存储的节点 prevCurrent
// 存储当前节点到 preCurrent上
// 当前节点设置为下一个指针



// 206. 反转链表
// https://leetcode.cn/problems/reverse-linked-list/description/

// 迭代方式
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let preCurrent = null
  let next = null
  while (head) {
      next = head.next
      
      head.next = preCurrent
      preCurrent = head

      head = next
  }
  return preCurrent
};

// 头插法
// 
// 1.定义一个新的头节点
// 2.依次将节点插入新头节点与第一个节点之间
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 定义一个新链表
  let temp = new ListNode();
  let next = null;
  while (head) {
      next = head.next;
      // 旧链表一个个插入到新链表头尾中间
      head.next = temp.next;
      temp.next = head

      head = next

  }
  return temp.next
};


