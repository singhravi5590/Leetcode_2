/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let output = nums.filter((item) => nums.indexOf(item) === nums.lastIndexOf(item));
    return output;
};