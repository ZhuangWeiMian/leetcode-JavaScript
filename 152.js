/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = [{max: nums[0], min: nums[0]}]
    for (let i = 1; i < nums.length; i++) {
        result[i] = {};
        result[i]["max"] = Math.max(result[i-1]["max"] * nums[i], nums[i], result[i-1]["min"] * nums[i]);
        result[i]["min"] = Math.min(result[i-1]["max"] * nums[i], nums[i], result[i-1]["min"] * nums[i]);
    }
    let max = -Infinity;
    for (let i = 0; i < result.length; i++) {
        if (max < result[i]["max"]) {
            max = result[i]["max"];
        }
        if (max < result[i]["min"]) {
            max = result[i]["min"];
        }
    }
    return max;
};