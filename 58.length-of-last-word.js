/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
        let res = 0;
        s = s.replace(/\s+$/g, '');
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === ' ') {
                res = s.length -1 - i;
                return res;
            }
        }
        return s.length;
};
// @lc code=end

