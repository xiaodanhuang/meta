/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let arr = [];
    for (let i = 0; i < ops.length; i++) {
        let item = ops[i];
        let number = Number(item);
        if (!Number.isNaN(number)) {
            arr.push(number)
        } else if (item === "C") {
            arr.pop()
        } else if (item === "D") {
            if (arr.length > 0) {
                let number = arr[arr.length - 1] * 2;
                arr.push(number)
            }
        } else if (item === "+") {
            if (arr.length >= 2) {
                let number = arr[arr.length - 1] + arr[arr.length - 2];
                arr.push(number)
            } else if (arr.length >= 1) {
                let number = arr[arr.length - 1];
                arr.push(number)
            } else {
                arr.push(number)
            }
        }
    }
    let result = 0;
    for (let index in arr) {
        result += arr[index]
    }
    return result
};
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));