/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

const { white } = require("color-name");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    let stk = [];
    let prev = null;
    while(root || stk.length) {
        while(root) {
            stk.push(root);
            root = root.left;
        }

        root = stk.pop();

        if (!root.right || root.right === prev) {
            res.push(root.val);
            prev = root;
            root = null;
        } else {
            stk.push(root);
            root = root.right;
        }
    }

    return res;

};
// @lc code=end

