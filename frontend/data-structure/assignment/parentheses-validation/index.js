const Stack = require('./stack')

function IsValidParentheses(s) {
    if (s === '' || s.length % 2 !== 0) return false;

    const stack = new Stack()
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char in map) {
            stack.push(char)
        } else {
            if (stack.top === -1) return false
            const top = stack.pop()
            if (map[top] !== char) return false
        }
    }

    return true;
}

// let got = IsValidParentheses("[{)]")
// console.log(got);

module.exports = {
    IsValidParentheses
}