/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freqMap = {};

    for(let char of s){
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let sorted = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

    let result = "";

    for(let char of sorted){
        result = result + char.repeat(freqMap[char]);
    }

    return result;
};