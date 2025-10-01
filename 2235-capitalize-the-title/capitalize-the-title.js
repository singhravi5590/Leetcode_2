/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let newStr = title.toLowerCase().split(" ");
    let newArr = newStr.map((item) => {
        if(item.length > 2){
            return item[0].toUpperCase() + item.slice(1, item.length)
        }
        else{
            return item
        }
    })
    return newArr.join(" ")
};