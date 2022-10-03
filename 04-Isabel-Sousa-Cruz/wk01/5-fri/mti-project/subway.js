// Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

const INTERSECTION_LINE = "Union Square"
const TRAVEL_TYPE = "travel";
const CHANGE_TYPE = "change";


const lineFactory = function(lineName, stopNames) {
    return {
        lineName: lineName,
        stops: stopNames
    }
}

const lineNStops = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineLStops = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6Stops = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const allLines = [lineFactory("N", lineNStops), lineFactory("L", lineLStops), lineFactory("6", line6Stops)];


const getLineStops = function(line) {
    for (let i = 0; i < allLines.length; i++) {
        const currentLine = allLines[i];
        if (line === currentLine.lineName) {
            return currentLine.stops;
        }
    }
};

const getStops = function(fromStop, toStop, line) {
    if(fromStop < toStop) {
        return line.slice(fromStop + 1, toStop + 1);
    } else {
        return line.slice(toStop, fromStop).reverse();
    }
}


const travelToIntersectionStop = function(fromStop, line) {
    const intersectionStopIndex = line.indexOf(INTERSECTION_LINE);
    const fromStopIndex = line.indexOf(fromStop);

    return getStops(fromStopIndex, intersectionStopIndex, line);
};

const travelFromIntersectionStop = function(toStop, line) {
    const intersectionStopIndex = line.indexOf(INTERSECTION_LINE);
    const toStopIndex = line.indexOf(toStop);
    return getStops(intersectionStopIndex, toStopIndex, line);
}

const planTrip = function(startLine, startStop, endLine, endStop) {
    const trip = []
    if (startLine === endLine && startStop === endStop) {
        return trip;
    }

    const startLineStops = getLineStops(startLine);
    const endLineStops = getLineStops(endLine);
    let stopsMade = [];

    if (startLine === endLine) {
        const startStopIndex = startLineStops.indexOf(startStop);
        const endStopIndex = endLineStops.indexOf(endStop);

        if (startStopIndex < endStopIndex) {
            stopsMade = getStopsUp(startStopIndex, endStopIndex, startLineStops);
        } else {
            stopsMade = getStopsDown(startStopIndex, endStopIndex, endLineStops);
        }

        trip.push( {
            type: TRAVEL_TYPE,
            line: startLine,
            stops: stopsMade
        });
        return trip;
    }

    if (endStop === "Union Square") {
        stopsMade = travelToIntersectionStop(startStop, startLineStops)

        trip.push( {
            type: TRAVEL_TYPE,
            line: startLine,
            stops: stopsMade
        });

        trip.push( {
            type: CHANGE_TYPE,
            line: INTERSECTION_LINE
        });

        trip.push( {
            type: TRAVEL_TYPE,
            line: endLine,
            stops: []
        });
        
    } else {
        stopsMade = travelToIntersectionStop(startStop, startLineStops);
        trip.push( {
            type: TRAVEL_TYPE,
            line: startLine,
            stops: stopsMade
        });

        trip.push( {
            type: CHANGE_TYPE,
            line: INTERSECTION_LINE
        });

        const nextStopsMade = travelFromIntersectionStop(endStop, endLineStops);
        trip.push( {
            type: TRAVEL_TYPE,
            line: endLine,
            stops: nextStopsMade
        });        
    }
    return trip;
}

const printTripInfo = function(trip) {
    if (trip.length === 0) {
        console.log("You are already on your end station and stop");
        return;
    }

    for (let i = 0; i < trip.length; i++) {
        const currentTrip = trip[i];
        if (i === trip.length - 1 && currentTrip.stops.length === 0) {
            console.log(`Your final destination is on ${INTERSECTION_LINE} on line ${currentTrip.line}`);
            return
        }

        if (currentTrip.type === TRAVEL_TYPE && i === 0) {
            console.log(`You must travel through the following stop(s) on the ${currentTrip.line} line: ${currentTrip.stops.join(", ")}.`);
        } else if (currentTrip.type === TRAVEL_TYPE) {
            console.log(`Your journey continues on the ${currentTrip.line} line through the following stop(s): ${currentTrip.stops.join(", ")}.`);
        } else {
            console.log(`Change at ${currentTrip.line}`);
        }
    }
};

const planTrip1 = planTrip("N", "34th", "6", "23rd");
const planTrip2 = planTrip("N", "34th", "N", "34th");
const planTrip3 = planTrip("N", "8th", "N", "34th");
const planTrip4 = planTrip("N", "34th", "N", "8th");
const planTrip5 = planTrip("N", "34th", "6", "Union Square");

printTripInfo(planTrip1);
console.log("------------------");
printTripInfo(planTrip2);
console.log("------------------");
printTripInfo(planTrip3);
console.log("------------------");
printTripInfo(planTrip4);
console.log("------------------");
printTripInfo(planTrip5);