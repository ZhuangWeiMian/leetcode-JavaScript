/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let tempArr = [root];

    if(!root) return root;

    let i = 0;
    while(i < tempArr.length) {
        const current = tempArr[i];
        let temp = current.left;
        current.left = current.right;
        current.right = temp;

        if (current.left) {
            tempArr.push(current.left);
        }
        if (current.right) {
            tempArr.push(current.right);
        }
        i++
    }

    return root;
};
// @lc code=end

