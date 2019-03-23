/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 确定好边界条件，递归的条件是什么，递归结束时怎样，如何拆分为更小的问题，增加的条件是什么？
// 1.没有根节点，那结果就是0 
// 2.有根节点，没有左右子树，结果为1 
// 3.没有左子树，有右子树。把右子树看成一棵新的树。 
// 4.没有右子树，有左子树。把左子树看成一棵新的树。 
// 5.既有左子树，又有右子树。那就把左右子树分别都看成新的树，最后比较谁的最近叶子的路径短，就取哪边。 
// 因为都把左右子树看成新的树了，所以每一棵树都可以用2-3-4-5来判断找出最近叶子的最短路径。 

var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return minDepth(root.right) + 1;
    else if (!root.right) return minDepth(root.left) + 1;
    else return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};