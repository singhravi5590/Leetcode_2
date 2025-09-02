/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === " ") return true;
    let cleaned = "";
    for(let i = 0; i<s.length; i++){
        let ch = s[i].toLowerCase();
        if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')){
            cleaned = cleaned + ch;
        }
    }

    let reversed = "";
    for(let i = cleaned.length - 1; i>=0; i--){
        reversed += cleaned[i];
    }

    return reversed === cleaned;
};