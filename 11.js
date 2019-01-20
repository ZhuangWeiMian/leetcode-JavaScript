/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0, j = height.length-1;
    while(i !== j) {
        let h = Math.min(height[i], height[j]);
           max =  Math.max(h * (j - i), max);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};