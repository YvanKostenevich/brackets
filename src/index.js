function check(str, bracketsConfig) {

    let openingBrackets = bracketsConfig.map(function (element) {
        return element[0];
    });

    let closingBrackets = bracketsConfig.map(function (element) {
        return element[1];
    });

    let bracketStack = [];

    for (let i = 0; i < str.length; i++) {

        if (openingBrackets.includes(str[i])) {
            if (closingBrackets.includes(str[i]) && bracketStack[bracketStack.length - 1] === str[i]) {
                bracketStack.pop();
                continue;
            }
            bracketStack.push(str[i]);

        } else if (closingBrackets.includes(str[i])) {

            if (openingBrackets.indexOf(bracketStack[bracketStack.length - 1]) === closingBrackets.indexOf(str[i])) {
                bracketStack.pop();
            } else {
                return false;
            }
        }
    }

    return bracketStack.length === 0;

}

module.exports = check;
