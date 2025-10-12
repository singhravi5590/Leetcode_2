/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const total = 1 << nums.length;

    for(let mask = 0; mask < total; mask++){
        let subset = [];
        let sum = 0;

        for(let i = 0; i<nums.length; i++){
            if(mask & (1 << i)){
                subset.push(nums[i]);
                sum += nums[i];
            }
        }

        if((subset.length === k) && (sum === n)){
            result.push(subset);
        }
    }
    return result;
};