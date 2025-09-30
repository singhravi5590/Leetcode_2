/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = [];
    for(let i = 0; i<s.length; i++){
        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')){
            letters.push(s[i]);
        }
    }

    let reversed = [];
    for(let i = letters.length - 1; i>=0; i--){
        reversed.push(letters[i]);
    }

    let result = '';
    let idx = 0;
    for(let i = 0; i<s.length; i++){
        if((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')){
            result += reversed[idx++];
        }
        else{
            result += s[i];
        }
    }
    
    return result;
};