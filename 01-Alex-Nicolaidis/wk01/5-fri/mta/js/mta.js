//MTA

//stations array for each line
const lineN = [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ];
const lineL = [ '8th', '6th', 'Union Square', '3rd', '1st' ];
const line6 = [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

//create a factory to generate the train lines and station

const trainFactory = function (l,s){
    return {
        line: l,
        stations:s
    }
};

const mtaTrains = [trainFactory("N",lineN), trainFactory("L",lineL), trainFactory("6",line6)];

const getStations = function (singleLine){   
    let train = mtaTrains.filter (function(a){
        return a.line === singleLine;
    });
    return train[0].stations;  //return an array of stations for a given line
};

// function to determine the stops if it is going forward
const forwardLoop = function (stationsList, start, end){
    let stopsArray = [];
    for(i = stationsList.indexOf(start) + 1; i < stationsList.indexOf(end) + 1; i++){
        stopsArray.push((stationsList[i]));
    }
    return stopsArray;
};

// function to determine the stops if it is going backwards
const backwardsLoop = function (trainLine, start, end){
    let stopsArray = [];
    for (i = trainLine.indexOf(start) - 1; i > trainLine.indexOf(end) - 1; i--){
        stopsArray.push(trainLine[i]);
    }
    return stopsArray;
};

const tripLeg = function ( trainLine, startStation, endStation ){
    let stops;
    let stations = getStations(trainLine);
    if(stations.indexOf(startStation) < stations.indexOf(endStation)){
        stops = forwardLoop(stations,startStation, endStation);
    }else{
        stops = backwardsLoop(stations,startStation, endStation);
    }
    return stops;
};

const planTrip = function (startLine, startStation, endLine, endStation){
    let totalStops = 0;
    if(startLine === endLine){
        let stops = tripLeg(startLine,startStation,endStation);
        totalStops += stops.length;
        console.log(`You must travel through the following stops on the ${startLine} line: ${stops.join(', ')}`);
        console.log(`${totalStops} stops in total`)
    }else{
        let stops1 = tripLeg(startLine,startStation,"Union Square");
        let stops2 = tripLeg(endLine,"Union Square",endStation);
        totalStops += stops1.length + stops2.length;
        console.log(`You must travel through the following stops on the ${startLine} line: ${stops1.join(', ')}`);
        console.log("Change at Union Sqaure");
        console.log(`Your journey continues through the following stops: ${stops2.join(', ')} on the ${endLine}.`);
        console.log(`${totalStops} stops in total`)
    };
};


planTrip('N', 'Times Square', '6', '33rd');



