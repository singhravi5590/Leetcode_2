/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelList = [];
    let arr = s.split("");

    for(let ch of arr){
        if(vowels.includes(ch)){
            vowelList.push(ch);
        }
    }

    for(let i = 0; i<arr.length; i++){
        if(vowels.includes(arr[i])){
            arr[i] = vowelList.pop();
        }
    }

    return arr.join("")
};