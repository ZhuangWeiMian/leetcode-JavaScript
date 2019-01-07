// 算法待优化
var kthSmallest = function(matrix, k) {
    let flatStr = matrix.toString().split(',');
    flatStr.sort(function(i, j) {
        return i - j;
    });
    for (let i = 0; i < flatStr.length; i++) {
        if (k-1==i) {
            return +flatStr[i];
        }
    }
};