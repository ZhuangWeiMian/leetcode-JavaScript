/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const map = {};
    const dp = (n, m) => {
        if (map[`${m}+${n}`]) return map[`${m}+${n}`];
        if (n === -1) {
            return m + 1;
        }

        if (m === -1) {
            return n + 1;
        }

        if (word1[n] === word2[m]) {
            return dp(n - 1, m - 1);
        }

        map[`${m}+${n}`] = Math.min(dp(n - 1, m) + 1, dp(n, m - 1) + 1, dp(n - 1, m - 1) + 1);

        return  map[`${m}+${n}`]

    }

    return dp(word1.length - 1, word2.length - 1);
};
// @lc code=end

