/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    let map = {};
    for (let i = 0; i < trust.length; i++) {
        const item = trust[i];

        const trust = item[0];
        const beTrust = item[1];
        if (!map[trust]) {
            map[trust].trustLength = 1;
        } else {
            map[trust].trustLength += 1;
        }

        if (!map[beTrust]) {
            map[beTrust].beTrustLength = 1;
        } else {
            map[beTrust].beTrustLength += 1;
        }
    }

    for (let i in map) {
        if (map[i].beTrustLength === N - 1 && !map[i].trustLength) {
            return i
        }
    }

    return -1;
};
// @lc code=end

