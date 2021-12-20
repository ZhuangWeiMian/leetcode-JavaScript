/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let resNode = new ListNode(0, null);
    const res = resNode;

    let flag = 0;
    while (l1 && l2) {
        const currentVal = (l1.val + l2.val + flag) % 10;
        flag = Math.floor((l1.val + l2.val + flag) / 10);
        resNode.next = new ListNode(currentVal, null);
        resNode = resNode.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        const currentVal = (l1.val + flag) % 10;
        flag = Math.floor((l1.val + flag) / 10)
        resNode.next = new ListNode(currentVal, null);
        resNode = resNode.next;
        l1 = l1.next;
    }

    while (l2) {
        const currentVal = (l2.val + flag) % 10;
        flag = Math.floor((l2.val + flag) / 10)
        resNode.next = new ListNode(currentVal, null);
        resNode = resNode.next;
        l2 = l2.next;
    }

    while (flag) {
        const currentVal = flag % 10;
        flag = 0;
        resNode.next = new ListNode(currentVal, null);
        resNode = resNode.next;
    }

    return res.next;

};
// @lc code=end

