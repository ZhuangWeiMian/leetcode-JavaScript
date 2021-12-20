/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const arr = new Array(text1.length).fill().map(() => {
        return new Array(text2.length).fill(0);
    });

    arr[-1] = [0];
    arr[-1][-1] = 0;
    arr[0][-1] = 0;
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                arr[i][j] = Math.max((arr[i - 1][j - 1]||0) + 1, arr[i][j]||0);
            } else {
                arr[i][j] = Math.max(arr[i][j - 1] || 0, arr[i][j] || 0, arr[i - 1][j] || 0);
            }
        }
    }

    return arr[text1.length - 1][text2.length-1];
};
// @lc code=end

