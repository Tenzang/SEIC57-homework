const DrEvil = function(num){
    if (num === 1000000){
        const evilVoice = `${ num } dollars (pinky)`;
        console.log(evilVoice);
        return evilVoice;
    }else{
        const evilVoice = `${ num } dollars`;
        console.log(evilVoice);
        return evilVoice;
    }
}
DrEvil(100)
DrEvil(1000000)

const mixUp = function(word1,word2){
    const prefix1 = word1.slice(0,2);
    const suffix1 = word1.slice(2,word1.length);
    const prefix2 = word2.slice(0,2);
    const suffix2 = word2.slice(2,word2.length);
    const newWord1 = `${prefix1}${suffix2}`;
    const newWord2 = `${prefix2}${suffix1}`;
    const newString = `${newWord1} ${newWord2}`;
    console.log(newString);
    return newString;

}
mixUp('hippie',"mushrooms");

const fixStart = function(word){
    const firstLetter=word[0];
    console.log(firstLetter);
    let fixed= word.replaceAll(firstLetter,'*',1);
    fixed= fixed.replace("*",firstLetter);
    console.log(fixed);
    return fixed;
}
fixStart('babble')

const verbing = function(word){
    if(word.endsWith('ing')=== true && word !== 'swing' && word !== 'ring' && word !== 'bring'){
        const newWord=`${ word }ly`;
        console.log(newWord);
        return(newWord);
    }else{
        const newWord = `${word}ing`;
        console.log(newWord);
        return(newWord);
    }

}
verbing('swing');
verbing('ride');
verbing('swimming');

const notBad = function(string){
    not = string.indexOf('not');
    console.log(not)
    bad= string.indexOf('bad');
    console.log(bad)
    if(not>0 && bad>not){
        const beforeNot = string.slice(0,not);
        const afterBad = string.slice(bad+3,string.length);
        const newString= `${ beforeNot }good${afterBad}`
        console.log(newString)
    }
}

notBad('This dinner is not that bad!')