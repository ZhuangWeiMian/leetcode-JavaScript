/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let curr = root;
    let stack = [];
    let result = [];
    while (true) {
        while(curr) {
        stack.push(curr);
        curr = curr.left;
        }
        if (stack.length === 0) {
            break;
        }
        curr = stack.pop()
            result.push(curr.val);
        curr = curr.right;

    }
    
    return result;
};