/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     s = s.split(""); // convert to array for easy removal
    
    for (let char of t) {
        let index = s.indexOf(char);  // check if char exists in s
        if (index !== -1) {
            s.splice(index, 1); // remove that char once
        } else {
            return char; // this is the extra one
        }
    }
};