/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    //Ravi Leetcode 2
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;  // just add 1
            return digits;
        }
        digits[i] = 0; // reset to 0 and carry over
    }

    // If all digits were 9, we need an extra 1 at the front
    digits.unshift(1);
    return digits;
};