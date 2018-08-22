var threeSum = function(nums) {
  nums.sort(function (i, j) {
  return i - j;
})
let result = [];
nums[nums.length] = undefined
nums[-1] = undefined;
for (let i = nums.length - 1; i > 1; i--) {
  let item = nums[i];
  if (item === nums[i+1]) {
    continue;
  }
  let head = 0;
  let tail = i - 1;
  while (head < tail) {
    if (nums[head]===nums[head-1]) {
      head++;
      continue;
    }
    if (nums[tail] === nums[tail+1] && tail!==i-1) {
      tail--;
      continue;
    }
    if (nums[head] + nums[tail] + item > 0) {
      tail--;
    } else if (nums[head] + nums[tail] + item < 0) {
      head++;
    } else {
      let smallResult = [nums[head], nums[tail], item]
      result.push(smallResult);
      head++;
      tail--;
    }
  }
}
    return result;
};