/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 这道题跟最小二叉树长度比较类似，递归条件都差不多，边界条件也差不多，可参考最小二叉树长度，111.js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return maxDepth(root.right)+1;
    else if(!root.right) return maxDepth(root.left)+1;
    else return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
};