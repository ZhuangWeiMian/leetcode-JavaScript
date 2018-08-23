var groupAnagrams = function (arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        item = item.split('')
        item.sort(function (i, j) {
            if (i > j) {
                return -1
            } else {
                return 1
            }
        })
        item = item.join('');
        if (map[item]) {
            map[item].push(arr[i])
        } else {
            map[item] = [arr[i]]
        }
    }
    let result = Object.values(map)
    return result;
};