// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const trainlines = {
    N: ["Times Square", "34th", "N-28th", "N-23rd", "Union Square", "N-8th"],
    L: ["L-8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "6-28th", "6-23rd", "Union Square", "Astor Place"],
};

function stationToUnion(selectLine, selectUnion, selectStation) {
    if (selectStation > selectUnion) {
        return selectLine.slice(selectUnion, selectStation + 1).reverse(); // when selectStation > selectUnion, slice from selectUnion, then reverse the array to shuffle back to correct order. 
        //Add 1 when slicing as it is off by 1
    } else {
        const backTrip = selectLine.slice(selectStation, selectUnion).reverse(); //find what stations are in between the two stations on the return trip
        //Reverse array to get correct order, then splice off 'Union Square' from array, as it is unneccessary
        backTrip.splice(backTrip[selectUnion], 1);
        return backTrip;
    }
};

function firstTrip(line, station) {
    const selectLine = trainlines[line];
    const selectStation = trainlines[line].indexOf(station);
    const selectUnion = trainlines[line].indexOf("Union Square"); //isolate Union square for QoL

    if (selectStation > selectUnion) {
        return stationToUnion(selectLine, selectUnion, selectStation)
    } else {
        return selectLine.slice(selectStation, selectUnion + 1); //find what stations are in between the two stations
        // Union Square is included in the first trip, to record total stops.
    }
};

function secondTrip(line, station) {
    const selectLine = trainlines[line];
    const selectStation = trainlines[line].indexOf(station);
    const selectUnion = trainlines[line].indexOf("Union Square"); //isolate Union square for QoL

    if (selectStation < selectUnion) {
        return stationToUnion(selectLine, selectUnion, selectStation)
    } else {
        const backTrip = selectLine.slice(selectUnion, selectStation + 1); //find what stations are in between the two stations on the return trip
        // Slice from selectUnion to selectStation plus 1, to account for being one off
        backTrip.splice(backTrip[selectUnion], 1); // Splice off Union Square as it is not necessary for second trip log
        return backTrip;
    }
};

function sameLine(line, stationStart, stationEnd) {
    const selectLine = trainlines[line];
    const topStation = trainlines[line].indexOf(stationStart);
    const bottomStation = trainlines[line].indexOf(stationEnd); //isolate Union square for QoL

    if (bottomStation < topStation) {
        return selectLine.slice(bottomStation, topStation + 1).reverse();
        //slice from end (bottomStation), then reverse Array to get correct order of Array
    } else {
        return selectLine.slice(topStation, bottomStation + 1)
        //if bottomStation > topStation, return array plus the last stop
    };
};

function startEndUnion(lineStart, stationStart, lineEnd, stationEnd) {
    if (stationStart === "Union Square") {
        console.log(`You are travelling from ${stationStart} to ${stationEnd}, on the ${lineEnd} line.`);
    } else {
        console.log(`You are travelling from ${stationStart} on the ${lineStart} line, to ${stationEnd}.`);
    }
};

function planTravel(lineStart, stationStart, lineEnd, stationEnd) {
    if (lineStart === lineEnd || (stationStart && stationEnd) === "Union Square") {
        //See if travel is on same line or remaining at Union Square

        if (stationStart === stationEnd) {
            console.log(`You are staying at the same location. Please select two different stations to travel.`);
        }; //If traveller is staying at same station

        //Check if travel is on the same line to different station
        const singleLine = sameLine(lineStart, stationStart, stationEnd);
        const trainMessage = (`You are travelling on the ${lineStart} line, from ${singleLine[0]} to ${singleLine[singleLine.length - 1]}.`);
        return trainMessage;
    } else
        //Check if travel is to/from Union Square
        if (stationStart === "Union Square" || stationEnd === "Union Square") {
            return startEndUnion(lineStart, stationStart, lineEnd, stationEnd);
        } else
            if (lineStart !== lineEnd) {
                const tripOne = firstTrip(lineStart, stationStart);
                const tripTwo = secondTrip(lineEnd, stationEnd);
                const totalStops = tripOne.concat(tripTwo).length - 1 + "stops in total.";
                //Using concat method to merge the two arrays and to minus 1 as Union Square is repeated.
                const trainMessageTwo = (`You are travelling through the following stops on the ${lineStart} line, ${tripOne.slice(1, tripOne.length).join(', ')}. Then change at Union Square. Continue your trip on the ${lineEnd} line, travelling through ${tripTwo.join(', ')}. It will be ${totalStops}.`);
            } else {
                return "Invalid Parameters. Please enter valid station names.";
            };
};