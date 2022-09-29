const isVowel = function (char) {
    return char === "a" || char === "e" || char === "i" || char === "o" ||char === "u";
}

const verbing = function (str) {
    if (str.length < 3) return str;

    const strEnding = str.slice(str.length - 3);
    if (strEnding === "ing") {
        return str + "ly";
    } else {
        const secondToLast = str[str.length - 2];
        const last = str[str.length - 1];
        if (last === "e") {
            return str.substring(0, str.length - 1) + "ing";
        } else if (!isVowel(secondToLast)) {
            return str + "ing"
        } else {
            return str + last + "ing";
        }
    }
}

console.log(verbing("swim"));
console.log(verbing("paste"));
console.log(verbing("swimming"));
console.log(verbing("go"));
console.log(verbing("jump"));