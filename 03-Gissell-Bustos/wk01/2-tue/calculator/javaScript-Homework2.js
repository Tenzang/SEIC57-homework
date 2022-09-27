function DrEvil(amount){
  if(amount >= 1000000){
    return `${amount}  dollars (pinky)`
  } 
  return `${amount} dollars`
}

function mixUp(string1, string2){
  
  let first2String1 = string1.substring(0,2);
  let restOfString1 = string1.substring(2, string1.length);
  let first2String2 = string2.substring(0,2);
  let restOfString2 = string2.substring(2, string2.length);

  console.log(`${first2String2}${restOfString1} ${first2String1}${restOfString2}`);
}
//mixUp('dog', 'dinner');

function fixStart(string){
  let firstCharacter = string.substring(0,1);
  return firstCharacter + string.substring(1, string.length).replaceAll(firstCharacter, '*');
}

console.log(fixStart('tomato'));

function verbing(string){
  let finishIng = string.substring(string.length-3, string.length)
  if(string.length > 3 && finishIng != 'ing'){
   return string.concat('ing')
  }else if(string.length > 3 && finishIng == 'ing'){
   return string.concat('ly')
  }
}
//console.log(verbing('swimming'));

function notBad(string){
  let notIndex = string.indexOf('not');
  let badIndex = string.indexOf('bad');
  
  if((notIndex !== -1 && badIndex !== -1) && badIndex > notIndex){
    let stringToReplace = string.substring(notIndex, badIndex+3)
    console.log(stringToReplace)
    return string.replaceAll(stringToReplace, 'good')
  }

  return string;

}

console.log(notBad('This dinner is not not bad pedso super bad!'))
console.log(notBad('This dinner is not that bad mate!'))
