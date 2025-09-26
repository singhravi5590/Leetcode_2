/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let newArr = [];
    let arr = s.split("");
    for(let i = 0; i<arr.length; i++){
        let ch = arr[i];

        if(newArr.includes(ch)) continue;

        while(newArr.length && ch < newArr[newArr.length - 1] && s.indexOf(newArr[newArr.length - 1], i) !== -1){
            newArr.pop()
        }

        newArr.push(ch)
    }

    return newArr.join("");
};