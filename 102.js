/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 层序遍历应用到队列，前序后序中序遍历用栈
var levelOrder = function(root) {
  if (!root) return [];
  let quenue = [root];
  let result = [];
  let currLength = 1;
  let nextLength = 0;
  let item = [];
  while(quenue.length) {
      let currItem = quenue.shift();
      item.push(currItem.val);
      
      currLength--;
      if (currItem.left) {
          quenue.push(currItem.left);
          nextLength++;
      }
      if (currItem.right) {
          quenue.push(currItem.right);
          nextLength++;
      }
      
      if(currLength === 0) {
          result.push(item);
          currLength = nextLength;
          nextLength = 0;
          item = [];
      }
  }
  return result;
};