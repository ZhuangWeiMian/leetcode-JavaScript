/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    const length = nums.length;

    const result = new Array(length);
    result[0] = true;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (result[i]) continue;
            result[i] = result[j] && nums[j] >= (i - j);
        }
    }

    return result[length - 1];

};
// @lc code=end

