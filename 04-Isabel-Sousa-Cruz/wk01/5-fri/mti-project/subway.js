const INTERSECTION_STOP = "Union Square"
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

const getLineStops = function(lineName) {
    for (let i = 0; i < allLines.length; i++) {
        const currentLine = allLines[i];
        if (lineName === currentLine.lineName) {
            return currentLine.stops;
        }
    }
    return null;
};

const getStops = function(fromStop, toStop, lineStops) {
    if (fromStop < toStop) {
        return lineStops.slice(fromStop + 1, toStop + 1);
    } else {
        return lineStops.slice(toStop, fromStop).reverse();
    }
}

const travelToIntersectionStop = function(fromStop, lineStops) {
    const intersectionStopIndex = lineStops.indexOf(INTERSECTION_STOP);
    const fromStopIndex = lineStops.indexOf(fromStop);

    return getStops(fromStopIndex, intersectionStopIndex, lineStops);
};

const travelFromIntersectionStop = function(toStop, lineStops) {
    const intersectionStopIndex = lineStops.indexOf(INTERSECTION_STOP);
    const toStopIndex = lineStops.indexOf(toStop);

    return getStops(intersectionStopIndex, toStopIndex, lineStops);
}

const planTrip = function(startLineName, startStop, endLineName, endStop) {
    const trip = []
    if (startLineName === endLineName && startStop === endStop) {
        return trip;
    }

    const startLineStops = getLineStops(startLineName);
    const endLineStops = getLineStops(endLineName);

    if(!startLineStops || !endLineStops) {
        return null;
    }
    
    if (startLineName === endLineName) {
        const startStopIndex = startLineStops.indexOf(startStop);
        const endStopIndex = endLineStops.indexOf(endStop);
        
        if (startStopIndex === -1 || endStopIndex === -1) {
            return null;
        }

        trip.push({
            type: TRAVEL_TYPE,
            line: startLineName,
            stops: getStops(startStopIndex, endStopIndex, startLineStops)
        });
        return trip;
    }

    if (endStop === "Union Square") {
        trip.push({
            type: TRAVEL_TYPE,
            line: startLineName,
            stops: travelToIntersectionStop(startStop, startLineStops)
        }, {
            type: CHANGE_TYPE,
            line: INTERSECTION_STOP
        }, {
            type: TRAVEL_TYPE,
            line: endLineName,
            stops: []
        });
        
    } else {
        trip.push({
            type: TRAVEL_TYPE,
            line: startLineName,
            stops: travelToIntersectionStop(startStop, startLineStops)
        }, {
            type: CHANGE_TYPE,
            line: INTERSECTION_STOP
        }, {
            type: TRAVEL_TYPE,
            line: endLineName,
            stops: travelFromIntersectionStop(endStop, endLineStops)
        });
    }
    return trip;
}

const printTripInfo = function(trip) {
    if (!trip) {
        console.log("Stop or line not found!");
        return;
    }

    if (trip.length === 0) {
        console.log("You are already on your end line and stop");
        return;
    }

    for (let i = 0; i < trip.length; i++) {
        const tripSection = trip[i];
        if (i === trip.length - 1 && tripSection.stops.length === 0) {
            console.log(`Your final destination is on ${INTERSECTION_STOP} on line ${tripSection.line}`);
            return;
        }

        if (tripSection.type === TRAVEL_TYPE && i === 0) {
            console.log(`You must travel through the following stop(s) on the ${tripSection.line} line: ${tripSection.stops.join(", ")}.`);
        } else if (tripSection.type === TRAVEL_TYPE) {
            console.log(`Your journey continues on the ${tripSection.line} line through the following stop(s): ${tripSection.stops.join(", ")}.`);
        } else if (tripSection.type === CHANGE_TYPE) {
            console.log(`Change at ${tripSection.line}`);
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