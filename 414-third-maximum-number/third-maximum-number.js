/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distinct = [...new Set(nums)];
    distinct.sort((a,b) => b - a);
    return distinct.length >= 3 ? distinct[2] : distinct[0];
};