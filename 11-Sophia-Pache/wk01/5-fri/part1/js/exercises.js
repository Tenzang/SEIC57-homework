// MTA Lab
// Objectives:

//     Apply your knowledge of Javascript to solve a real world problem.
//     Get really good at array manipulation.

// Activity

//     Create a program that models a simple subway system.

//     The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

//     There are 3 subway lines:
//         The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//         The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//         The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//         All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:

//     Work out how you would do it on paper first! Then start to explain that process in Javascript.
//     Get the program to work for a single line before trying to tackle multiple lines.
//     Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
//     Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
//     The key to the lab is finding the index positions of each stop. (hint: indexOf())
//     Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


    const prompt1Text = prompt("What subway line are you taking? nLine, lLine, or sixLine?");
    const prompt2Text = prompt("What is your first stop? nLine: Time Square, 34th, 28th, 23rd, Union Square, or 8th, lLine: 4th, 3rd, Union Square, 6th, 8th, sixLine: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place.").toString();
    const prompt3Text = prompt("What is the line of your last stop? nLine, lLine, or sixLine?");
    const prompt4Text = prompt("What is your last stop? nLine: Time Square, 34th, 28th, 23rd, Union Square, or 8th, lLine: 4th, 3rd, Union Square, 6th, 8th, sixLine: Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place.").toString();


// Storing subway line and stops in variables.
const nLine = ['Times Square','34th','28th','23rd','Union Square','8th'];
const lLine = ['4th','3rd','Union Square','6th','8th'];
const sixLine = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']


// This function creates a new array from a loop, either normal or reverse loop, to record the stops of the trip.
const tripLoop = function(line1, start, stop) {
    let startIndex = line1.indexOf(start);
    let stopIndex = line1.indexOf(stop);
    let result = [];
  		if (startIndex < stopIndex) {
    		for (i=startIndex; i <= stopIndex;i++) {
    		result.push(line1[i]);
   			} 
    	} else {
			for (i=startIndex; i >= stopIndex;i--) {
    		result.push(line1[i]);
			}
		}
    return result;
}

// testing tripLoop below:
// console.log(tripLoop(nLine,'Union Square','34th'));
// console.log(tripLoop(nLine,'34th','8th'));
// tripLoop(nLine,'34th','8th');



// This function starts from the first line input stop to Union Square (the intersection)
const lineToUnionSquare = function (line1, start, stop='Union Square'){
    let startIndex = line1.indexOf(start);
    let stopIndex = line1.indexOf('Union Square');
    let result = [];
  		if (startIndex < stopIndex) {
    		for (i=startIndex; i <= stopIndex;i++) {
    		result.push(line1[i]);
   			} 
    	} else {
			for (i=startIndex; i >= stopIndex;i--) {
    		result.push(line1[i]);
			}
		}
    return result;
}
// Testing lineToUnionSquare below:
// console.log(lineToUnionSquare(nLine,'34th'));

// This function starts from Union Square (the intersection) to the second line input stop
const lineFromUnionSquare = function (line2, stop, start='Union Square'){
    let startIndex = line2.indexOf('Union Square');
    let stopIndex = line2.indexOf(stop);
    let result = [];
  		if (startIndex < stopIndex) {
    		for (i=startIndex; i <= stopIndex;i++) {
    		result.push(line2[i]);
   			} 
    	} else {
			for (i=startIndex; i >= stopIndex;i--) {
    		result.push(line2[i]);
			}
		}
    return result;
}

// testing lineFromUnionSquare function below: 
// console.log(lineFromUnionSquare(lLine, '8th'));

// This function executes and console logs the following stops needed.
const planTrip = function (line1, start, line2, stop) {
    let stopsVisited;
    let stops1Visited;
    let stops2Visited;
    if (line1 === line2) {
    stopsVisited = tripLoop(line1, start, stop); 
    console.log(`You must travel through the following stops: ${stopsVisited}. ${stopsVisited.length} stops in total. `);
    } else {
    stops1Visited = lineToUnionSquare(line1, start);
    stops2Visited = lineFromUnionSquare(line2, stop);
    console.log(`You must travel through the following stops: ${stops1Visited}. Change at Union Square. Your journey continues through the following stops: ${stops2Visited}. ${stops1Visited.length + stops2Visited.length - 1} stops in total.`)
    }
}

planTrip(nLine,'34th',sixLine,'Astor Place');
planTrip(prompt1Text, prompt2Text, prompt3Text, prompt4Text);


