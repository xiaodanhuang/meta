var isValid = function (s) {
    let map = new Map();
    map.set('(', ')');
    map.set(')', '(');
    map.set('{', '}');
    map.set('}', '{');
    map.set('[', ']');
    map.set(']', '[');
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr.length && map.get(s[i]) === arr[arr.length - 1]) {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    return arr.length ? false : true
};

console.log(isValid("{[]}"));