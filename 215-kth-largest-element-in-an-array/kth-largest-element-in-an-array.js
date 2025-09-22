/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let length = nums.length;
    nums.sort((a,b) => a - b);
    return nums[length - k]
};