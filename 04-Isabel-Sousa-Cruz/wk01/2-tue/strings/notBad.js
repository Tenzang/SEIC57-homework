const notBad = function(str) {
    for (let i = 3; i < str.length; i++) {
        const current3LetterWord = str.substring(i - 3, i);

        if (current3LetterWord === "not") {
            for (let j = i; j < str.length; j++) {
                const current3LetterWord = str.substring(j - 3, j);
                if (current3LetterWord === "bad") {
                    return str.substring(0, i - 3) + "good" + str.substring(j);
                }
            }
        }
    }
    return str;
}

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));