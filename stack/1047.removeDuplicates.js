/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let result = []
    let arr = S.split('')
    for(let index in arr) {
        if(result.length>0 && result[result.length-1] === arr[index]) {
          result.pop()
        }else {
            result.push(arr[index])
        }
    }
    return result.join('')
};
console.log(removeDuplicates("abbaca"))