/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let arr = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                arr[i] = Math.max(arr[j] + 1, arr[i]);
            }
        }
    }

    return Math.max(...arr);
};
// @lc code=end

