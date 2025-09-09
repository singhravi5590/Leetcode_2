/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let countMap = new Map();
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Check if counts are unique
    let freqSet = new Set(countMap.values());
    return freqSet.size === countMap.size;
};