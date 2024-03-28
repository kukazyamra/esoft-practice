function isCorrect(str) {
    const stack = [];
    brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let symbol of str) {
        if (brackets[symbol]) {
            stack.push(symbol);
        } else if (Object.values(brackets).includes(symbol)) {
            lastOpeningBracket = stack.pop();
            if (brackets[lastOpeningBracket] !== symbol) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isCorrect('()'))
console.log(isCorrect('()[]{}'))
console.log(isCorrect('(]'))
console.log(isCorrect('([)]'))
console.log(isCorrect('{[]}'))