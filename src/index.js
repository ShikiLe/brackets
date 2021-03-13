module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] === bracketsConfig[j][0] &&
                str[i] === bracketsConfig[j][1]
            ) {
                if (str[i] !== stack[stack.length - 1]) {
                    stack.push(str[i]);
                } else {
                    stack.pop();
                }
            }
            if (str[i] === bracketsConfig[j][0]) {
                stack.push(str[i]);
            }
            if (str[i] === bracketsConfig[j][1]) {
                if (bracketsConfig[j][0] === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }
    return !stack.length;
};
