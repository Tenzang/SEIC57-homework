// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip 
// in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For 
// example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, 
// so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can 
// use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the 
// N and on the 6 need to be differentiated)

const line = function (name,stations) {
    return {
        name: name,
        stations: stations
    };
};

const lines = [
    line('N',['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']),
    line('L',['8th', '6th', 'Union Square', '3rd', '1st']),
    line('6',['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'])
];

const checkLine = function (line) {
    
    for (let lineIndex = 0 ; lineIndex < lines.length; lineIndex++){
        if(line === lines[lineIndex].name){
            return lineIndex;
        }
    }
};
const checkStation = function (lineName, station) {
    let stations = lines[checkLine(lineName)].stations;
    for (let stationIndex = 0 ; stationIndex < stations.length; stationIndex++) {
        if(station === stations[stationIndex]){
            return stationIndex;
        }
    }
};

console.log(checkLine('N'));
console.log(checkLine('N','Times Square'));

const checkLineInfo = function (headLine, startingStation, endLine, terminus) {
    const headLineIndex = checkLine(headLine);
    const startingIndex = checkStation(headLine, startingStation);
    const endLineIndex = checkLine(endLine);
    const terminusIndex = checkStation(endLine, terminus);
    
    return {
        headLineIndex: headLineIndex,
        startingIndex: startingIndex,
        endLineIndex: endLineIndex,
        terminusIndex: terminusIndex        
    }

};



const outputInfo = function (headLineIndex, startingIndex, endLineIndex, terminusIndex ){
    // console.log(headLineIndex);
    // console.log(startingIndex);
    // console.log(endLineIndex);
    // console.log(terminusIndex);
    if (headLineIndex === endLineIndex) {
        return {
         stationAmount : Math.abs(startingIndex - terminusIndex)+1,
         headLineStationInfo : lines[headLineIndex].stations.slice(startingIndex,terminusIndex+1),
         changeInfo : 'No need to change.'
        };
    } else {
        return {
         unionSquareInHeadLineIndex : checkStation(lines[headLineIndex].name, 'Union Square'),
         unionSquareInEndLineIndex : checkStation(lines[endLineIndex].name, 'Union Square'),
         stationAmount : Math.abs(startingIndex - checkStation(lines[headLineIndex].name, 'Union Square')) + Math.abs(terminusIndex - checkStation(lines[endLineIndex].name, 'Union Square')) + 1,
         headLineStationInfo : lines[headLineIndex].stations.slice(startingIndex, checkStation(lines[headLineIndex].name, 'Union Square')+1),
         endLineStationInfo : lines[endLineIndex].stations.slice(startingIndex, checkStation(lines[endLineIndex].name, 'Union Square')+1),
         changeInfo : 'Change at Union Square.'
        };
    }
};

const planTrip = function (headLine, startingStation, endLine, terminus) {
    const headLineIndex = checkLineInfo(headLine, startingStation, endLine, terminus).headLineIndex;
    const startingIndex = checkLineInfo(headLine, startingStation, endLine, terminus).startingIndex;
    const endLineIndex = checkLineInfo(headLine, startingStation, endLine, terminus).endLineIndex;
    const terminusIndex = checkLineInfo(headLine, startingStation, endLine, terminus).terminusIndex;
   if (headLine === endLine) {
    const outputInfomation = outputInfo(headLineIndex,startingIndex,endLineIndex,terminusIndex);
    console.log(`You must travel through the following stops on the ${headLine} line: ${outputInfomation.headLineStationInfo}`);
    console.log(`${outputInfomation.changeInfo}`);
    console.log(`${outputInfomation.stationAmount} stops in total.`);
   } else {
    const outputInfomation = outputInfo(headLineIndex,startingIndex,endLineIndex,terminusIndex);
    // console.table(outputInfomation);
    console.log(`You must travel through the following stops on the ${headLine} line: ${outputInfomation.headLineStationInfo}`);
    console.log(`${outputInfomation.changeInfo}`);
    console.log(`Your journey continues through the following stops: ${outputInfomation.endLineStationInfo}.`);
    console.log(`${outputInfomation.stationAmount} stops in total.`);
   }
};


planTrip('N', 'Times Square', 'N', '8th'); 
planTrip('N', 'Times Square', '6', '33rd'); 
