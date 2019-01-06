// 先排序，然后按着末位一个个插入的方式进行
var wiggleSort = function(nums) {
    nums.sort(function(i, j) {
        return i - j;
    });
    let clone = [...nums];
    for(let i=0;i<nums.length;i++)
        {
            if(i%2==0)
                nums[i]=clone[Math.floor((clone.length-1)/2)-Math.floor(i/2)];
            else
                nums[i]=clone[clone.length-1-Math.floor(i/2)];
        }
};

