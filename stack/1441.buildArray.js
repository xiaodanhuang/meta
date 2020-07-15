/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result =[]
    let index = 0
    let number = 1
    while(number <=n && index < target.length){
        if(target[index] ===number){
            result.push('Push')
            index++
        } else {
            result.push('Push')
            result.push('Pop')
        }
        number ++
    }
    return result
};
target = [1,2], n = 4
console.log(buildArray(target,n))