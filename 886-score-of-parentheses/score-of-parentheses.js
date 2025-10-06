/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0];
    for(let ch of s){
        if(ch === '('){
            stack.push(0)
        }
        else{
            let val = stack.pop();
            let score = Math.max(2 * val, 1);
            stack[stack.length - 1] += score;
        }
    }
    return stack[0];
};