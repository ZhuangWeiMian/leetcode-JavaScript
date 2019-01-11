/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let result = [];
    result[0] = true;
  for(let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
          let str = s.substring(j, i);
          if (result[j] && wordDict.includes(str)) {
              result[i] = true;
              break;
          }
      }
  }
    return result[s.length] || false;
};