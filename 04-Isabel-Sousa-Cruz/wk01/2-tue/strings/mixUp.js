const mixUp = function(str1, str2) {
    if (str1.length < 2 || str2.length < 2) return "string can not be smaller than length 2";

    const new1 = str1.replace(str1.substring(0, 2), str2.substring(0,2));
    const new2 = str2.replace(str2.substring(0, 2), str1.substring(0,2));
    
    return `${new1} ${new2}`;
}

console.log(mixUp("mix", "pod"));
console.log(mixUp('dog', 'dinner'));
console.log(mixUp("car", "i"));