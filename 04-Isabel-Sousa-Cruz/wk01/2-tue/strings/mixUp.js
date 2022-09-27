const mixUp = function(str1, str2) {
    if (str1.length < 2 || str2.length < 2) return "string can not be smaller than length 2";

    const startStr1 = str1.slice(0, 2);
    const startStr2 = str2.slice(0, 2);

    const newString1 = `${startStr2}${str1.slice(2)}`;
    const newString2 = `${startStr1}${str2.slice(2)}`;

    return `${newString1} ${newString2}`;
}

console.log(mixUp("mix", "pod"));
console.log(mixUp('dog', 'dinner'));
console.log(mixUp("car", "i"));