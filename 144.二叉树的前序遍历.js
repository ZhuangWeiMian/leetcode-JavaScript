/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

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
var preorderTraversal = function(root) {
    const dsf = function (root, res) {
        if (!root) return;

        res.push(root.val);
        dsf(root.left, res);
        dsf(root.right, res);
    }

    let res = [];
    dsf(root, res);

    return res;
};
// @lc code=end

