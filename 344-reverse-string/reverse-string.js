/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let str = s.slice(0, s.length);
    let j = 0;
    for(let i = s.length - 1; i>=0; i--){
        s[j] = str[i];
        j++; 
    }
};