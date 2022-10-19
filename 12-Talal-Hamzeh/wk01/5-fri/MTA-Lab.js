/* Create a program that models a simple subway system.

* The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

* There are 3 subway lines:
  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  * All 3 subway lines intersect at Union Square, but there are no other intersection points.
  *  (For example, this means the 28th stop on the N line
   is different than the 28th street stop on the 6 line, so you'll 
   have to differentiate this when you name your stops in the arrays.)
* Tell the user the number of stops AND the stops IN ORDER that they will 
pass through or change at.*/

// // name each Line Route :

// const mtaLines = {
//     lineN : ['Times Square ', '34th ', '28th ', '23rd ', 'Union Square ', '8th ' ],
//     lineL : [ '8th', '6th', 'Union Square', '3rd', '1st'],
//     line6 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

// }
// check which line you are on 
// where you heading to 
// where to change 
// stops count 
// changing point is union square

// find your station on eaxch line 

// first line N 
const lineN = {
  stations:['Times Square', '34rd', '28th', '23rd', 'Union Square', '8th'],
  travelRoute: [],

  fromStation: function (departure) {
    return lineN.stations.indexOf(departure);
  },

  toStation: function (arrival) {
    return lineN.stations.indexOf(arrival);
  },

  stopsForward: function (departure, arrival) {
    let firstStop = lineN.fromStation(departure);
    let lastStop = lineN.toStation(arrival);
    for (let i = firstStop; i <= lastStop; i++) {
      let currentStation = lineN.stations[i];
      lineN.travelRoute.push(currentStation);
    }
  },

  stopsBackward: function (departure, arrival) {
    let firstStop = lineN.fromStation(departure);
    let lastStop = lineN.toStation(arrival);
    let unionSquare = lineN.stations.indexOf('Union Square');
    for (let i = firstStop; i >= lastStop; i--) {
      let currentStation = lineN.stations[i];
      lineN.travelRoute.push(currentStation);
    }
  },

  goToUnionSquare: function (departure) {
    let arrival = 'Union Square';
    let firstStop = lineN.fromStation(departure);
    let lastStop = lineN.toStation(arrival);
    if (firstStop < lastStop) {
      lineN.stopsForward(departure, arrival);
    } else {
      lineN.stopsBackward(departure, arrival);
    }
  },

  travel: function (departure, arrival) {
    let firstStop = lineN.fromStation(departure);
    let lastStop = lineN.toStation(arrival);
    if (firstStop < lastStop) {
      lineN.stopsForward(departure, arrival);
    } else {
      lineN.stopsBackward(departure, arrival);
    }
  }
};

const lineL = {
  stations: ['8th', '6th', 'Union Square', '3rd', '1st'],
  travelRoute: [],

  fromStation: function (departure) {
    return lineL.stations.indexOf(departure);
  },

  toStation: function (arrival) {
    return lineL.stations.indexOf(arrival);
  },

  stopsForward: function (departure, arrival) {
    let firstStop = lineL.fromStation(departure);
    let lastStop = lineL.toStation(arrival);
    for (let i = firstStop; i <= lastStop; i++) {
      var currentStation = lineL.stations[i];
      lineL.travelRoute.push(currentStation);
    }
  },

  stopsBackward: function (departure, arrival) {
    let firstStop = lineL.fromStation(departure);
    let lastStop = lineL.toStation(arrival);
    let unionSquare = lineL.stations.indexOf('Union Square');
    for (let i = firstStop; i >= lastStop; i--) {
      let currentStation = lineL.stations[i];
      lineL.travelRoute.push(currentStation);
    }
  },

  goToUnionSquare: function (departure) {
    let arrival = 'Union Square';
    let firstStop = lineL.fromStation(departure);
    let lastStop = lineL.toStation(arrival);
    if (firstStop < lastStop) {
      lineL.stopsForward(departure, arrival);
    } else {
      lineL.stopsBackward(departure, arrival);
    }
  },

  travel: function (departure, arrival) {
    let firstStop = lineL.fromStation(departure);
    let lastStop = lineL.toStation(arrival);
    if (firstStop < lastStop) {
      lineL.stopsForward(departure, arrival);
    } else {
      lineL.stopsBackward(departure, arrival);
    }
  }
};

const line6 = {
  stations: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  travelRoute: [],

  fromStation: function (departure) {
    return line6.stations.indexOf(departure);
  },

  toStation: function (arrival) {
    return line6.stations.indexOf(arrival);
  },

  stopsForward: function (departure, arrival) {
    let firstStop = line6.fromStation(departure);
    let lastStop = line6.toStation(arrival);
    for (var i = firstStop; i <= lastStop; i++) {
      let currentStation = line6.stations[i];
      line6.travelRoute.push(currentStation);
    }
  },

  stopsBackward: function (departure, arrival) {
    let firstStop = line6.fromStation(departure);
    let lastStop = line6.toStation(arrival);
    let unionSquare = line6.stations.indexOf('Union Square'); //?delete this lines
    for (let i = firstStop; i >= lastStop; i--) {
      let currentStation = line6.stations[i];
      line6.travelRoute.push(currentStation);
    }
  },

  goToUnionSquare: function (departure) {
    let arrival = 'Union Square';
    let firstStop = line6.fromStation(departure);
    let lastStop = line6.toStation(arrival); // i assume we do need this line
    if (firstStop < lastStop) {
      line6.stopsForward(departure, arrival);
    } else {
      line6.stopsBackward(departure, arrival);
    }
  },

  travel: function (departure, arrival) {
    let firstStop = line6.fromStation(departure);
    let lastStop = line6.toStation(arrival);
    if (firstStop < lastStop) {
      line6.stopsForward(departure, arrival);
    } else {
      line6.stopsBackward(departure, arrival);
    }
  }
};

const lines = {
  'N': lineN,
  'L': lineL,
  '6': line6
};

const planTrip = function (L1, S1, L2, S2) {
  lines[L1].travelRoute = [];
  lines[L2].travelRoute = [];
  let numStops = 0;
  if (L1 === L2) {
    lines[L1].travel(S1, S2);
    let stops = lines[L1].travelRoute.slice(1);
    console.log("You must travel through the following stops on the " + L1 + " line: " + stops + ".");
    numStops = stops.length;
    console.log(numStops + " stops in total.");
  }
  if (L1 !== L2) {
    lines[L1].goToUnionSquare(S1);
    lines[L2].travel('Union Square', S2);
    let stops = lines[L1].travelRoute.slice(1);
    let stationsAfterUnionSquare = lines[L2].travelRoute.slice(1);
    console.log("You must travel through the following stops on the " + L1 + " line: " + stops + ".");
    console.log("Change at Union Square.");
    console.log("Your journey continues through the following stops on the " + L2 + " line: " + stationsAfterUnionSquare + ".");
    numStops = stops.length + stationsAfterUnionSquare.length;
    console.log(numStops + " stops in total.");
  }
};
planTrip('N', '28th' , '6' , '6th' ); 

