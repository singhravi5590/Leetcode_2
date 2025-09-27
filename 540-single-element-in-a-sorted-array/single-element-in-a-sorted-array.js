/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let newObj = {};
    for(let i = 0; i<nums.length; i++){
        let ch = nums[i];
        newObj[ch] = !newObj[ch] ? 1 : newObj[ch] + 1;
    }

    for(let key in newObj){
        if(newObj[key] === 1){
            return Number(key)
        }
    }
};