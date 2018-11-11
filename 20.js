/** @file 20.js
 * @function isValid
 * @author zhuangweimian
 */
let isValid = function (s) {
    let arr = [];
    let result = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '}' && arr[arr.length - 1] === '{') {
            arr.pop();
        } else if (s[i] === ']' && arr[arr.length - 1] === '[') {
            arr.pop();
        } else if (s[i] === ')' && arr[arr.length - 1] === '(') {
            arr.pop();
        } else {
            arr.push(s[i]);
        }
    }
    result = arr.length === 0;
    return result;
};