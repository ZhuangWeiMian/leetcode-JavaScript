/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    let map = {};
    if (!trust.length && N === 1) return 1;
    for (let i = 0; i < trust.length; i++) {
        const item = trust[i];

        const trustPerson = item[0];
        const beTrust = item[1];
        if (!map[trustPerson] || !map[trustPerson.trustLength]) {
            map[trustPerson] = Object.assign(map[trustPerson] || {}, {
                trustLength: 1,
            });
        } else {
            map[trustPerson].trustLength += 1;
        }

        if (!map[beTrust] || !map[beTrust].beTrustLength) {
            map[beTrust] = Object.assign(map[beTrust] || {}, {
                beTrustLength: 1
            });
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

