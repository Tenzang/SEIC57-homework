const fixStart = function(str) {
    const star = "*"
    if (str.length === 1) return star;

    const firstChar = str[0];
    let newStr = str;
    for (let i = 1; i < str.length; i++) {
        if (newStr[i] === firstChar) {
            newStr = newStr.substring(0, i) + star + newStr.substring(i + 1);
        }
    }
    return newStr;
}

console.log(fixStart("babble"));