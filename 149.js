/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(arr) {
   let max = 1
   if (arr.length === 0) {
       return 0
   }
    const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a%b);
}
    for (let i = 0; i < arr.length; i++) {
  let item1 = arr[i]
  let map = {}
  let min = 1;
  for (let j = 0; j < arr.length; j++) {
      let item2 = arr[j]
    if (i !== j) {
      let x = item1.x - item2.x
      let y =item1.y - item2.y
       if (x === 0 && y === 0) {
            min++;
            if (max < min) {
              max = min
            }
            continue;
        }
        let d = gcd(x, y);
                x = Math.floor(x / d);
                y = Math.floor(y / d);
                let arc = "" + x + "," + y;
       
      if (map[arc]) {
        map[arc]++;
        if (max < map[arc]) {
          max = map[arc]
        }
      } else {
        map[arc] = min+1
        if (max < map[arc]) {
          max = map[arc]
        }
      }
    }
  }
}
    return max;
};