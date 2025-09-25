/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(/\s+/);
    let newString = arr.reverse().join(" ");
    return newString
};