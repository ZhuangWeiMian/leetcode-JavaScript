/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1 || !s.length) return s;
    let maxLeft = 0;
    let resLength = 0;

    const expandAroundCenter = (left, right, s) => {
        let maxLength = 0;
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                maxLength = right - left+1;
                left--;
                right++;
            } else {
                return maxLength;
            }
        }

        return maxLength;

    }
    for (let i = 0; i < s.length; i++) {

        const oddLength = expandAroundCenter(i, i, s);
        const evenLength = expandAroundCenter(i, i + 1, s);

        if (resLength < Math.max(oddLength, evenLength)) {
            resLength = Math.max(oddLength, evenLength);
            maxLeft = i - (Math.ceil(resLength / 2) - 1);
        }

    }

    return s.slice(maxLeft, maxLeft + resLength);
};
// @lc code=end

// "abcdaaaabaad"