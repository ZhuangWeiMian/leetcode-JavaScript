/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftArr = [1];
    let rightArr = [1];
    for (let i = 1; i <= nums.length; i++) {
        leftArr[i] = leftArr[i - 1] * nums[i - 1];
    }
    for (let i = nums.length; i > 0; i--) {
        rightArr[nums.length - i + 1] = rightArr[nums.length - i] * nums[i - 1];
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftArr[i] * rightArr[nums.length - i - 1];
    }
    return result;
};