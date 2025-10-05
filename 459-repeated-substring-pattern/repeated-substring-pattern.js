/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            let sub = s.slice(0, i);
            if (sub.repeat(n / i) === s) return true;
        }
    }
    return false;
};