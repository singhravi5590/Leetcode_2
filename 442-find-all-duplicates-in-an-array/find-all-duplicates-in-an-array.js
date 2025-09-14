/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1; // map number to index

        if (nums[index] < 0) {
            // already visited → duplicate found
            result.push(Math.abs(nums[i]));
        } else {
            // mark as visited (flip sign)
            nums[index] = -nums[index];
        }
    }

    return result;
};