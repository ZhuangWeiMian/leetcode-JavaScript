/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;

    const dfs = function (root, length) {
        if (!root.left && !root.right) {
            return length;
        }
        length += 1;
        let left = Infinity, right = Infinity;
        if (root.left) {
            left = dfs(root.left, length);
        }

        if (root.right) {
            right = dfs(root.right, length);
        }

        return Math.min(left, right);
    }

    return dfs(root, 1);

};
// @lc code=end

