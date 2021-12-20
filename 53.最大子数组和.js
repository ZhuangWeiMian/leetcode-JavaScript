/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const arr = new Array(nums.length);
    arr[-1] = 0;
    for (let i = 0; i < nums.length; i ++) {
        arr[i] = Math.max(nums[i], arr[i-1]+ nums[i]);
    }

    return Math.max(...arr);
};
// @lc code=end

