/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return nums;
    let maxIndex = 0;
    let max = -Infinity;
    let i;
    let result = [];
    for (i = 0; i < k; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }     
    }
    result.push(max);
    while(i < nums.length) {
        if (maxIndex <= i - k) {
            maxIndex++;
            max = -Infinity;
            for (let j = maxIndex; j <= i; j++) {
               if (nums[j] > max) {
                    max = nums[j];
                    maxIndex = j;
                } 
            }
            
        } else {
            if (max < nums[i]) {
                max = nums[i];
                maxIndex = i;
            }
        }
        i++;
        result.push(max);
    }
    return result;
};