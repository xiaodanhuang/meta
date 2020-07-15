/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    S= deleteBack(S)
    T= deleteBack(T)
    return S===T ?true:false


};
function deleteBack (str) {
    let arr =  str.split('')
    let result = []
    for(let index in arr) {
        if(arr[index] ==='#') {
            result.pop()
        }else{
            result.push(arr[index])
        }
    }
    return result.join('')
}

S = "ab#c", T = "ad#c"
console.log(backspaceCompare(S,T))