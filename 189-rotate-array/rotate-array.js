/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // handle cases where k > n

    // helper function to reverse array in place
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Step 1: reverse the entire array
    reverse(0, n - 1);

    // Step 2: reverse first k elements
    reverse(0, k - 1);

    // Step 3: reverse the remaining n-k elements
    reverse(k, n - 1);

    return nums; // rotated array

};