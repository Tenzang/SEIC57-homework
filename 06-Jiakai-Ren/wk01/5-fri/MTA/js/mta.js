// Jiakai Ren
// SEI57 - Homework - Wk01 Fri

// # MTA Lab

console.log("\nStand clear of the closing doors, please! Use\n\nplanTrip('startLine', 'startStation', 'endLine', 'endStation');\n ");

const network = {
  lineN: {
    stops: ['57th', '49th', '42nd Times Sq', '34th', '28th', '23rd', '14th Union Sq', '8th'],
    interchange: ['14th Union Sq']
  },
  lineL: {
    stops: ['8th', '6th', '14th Union Sq', '3rd', '1st'],
    interchange: ['14th Union Sq']
  },
  line6: {
    stops: ['42nd Grand Central', '33rd', '28th', '23rd', '14th Union Sq', 'Astor Pl'],
    interchange: ['14th Union Sq']
  }
};

function planTrip(startLine, start, endLine, end) {
  // This function checks lineExistance(), stationExistance(), if the user should stay: boolean, what type of requireInterchange() is required, and announceAll() information

  const sL = 'line' + startLine;
  const eL = 'line' + endLine;

  const lineExistance = lineExists(sL, eL);           // returned [array]
  if (!lineExistance[0] || !lineExistance[1]) {
    let message = '';
    if (lineExistance[0] === false) {
      message += `MTA does not operate (${ startLine }) Train, have you tried Canada?\n`;
    };
    if (lineExistance[1] === false ) {
      message += `MTA does not operate (${ endLine }) Train, have you tried Mexico?\n`;
    };
    console.log(message);
    return;
  };

  const stationExistance = stationExists(sL, start, eL, end);   // returned [array]
  if (!stationExistance[0] || !stationExistance[1]) {
    let message = '';
    if (stationExistance[0] === false) {
      message += `Station [${ start }] does not exist on (${ startLine }) Train\n`;
    };
    if (stationExistance[1] === false ) {
      message += `Station [${ end }] does not exist on (${ endLine }) Train`;
    };
    console.log(message);
    return;
  };

  let startIndex = network[sL].stops.indexOf(start);  // index of starting station on startLine
  let endIndex = network[eL].stops.indexOf(end);      // index of ending station on endLine
  let legA;                                           // stations before interchange
  let legB;                                           // stations after interchange if required
  let destoA;                                         // destination board for legA
  let destoB;                                         // destination board for legB if required
  let sayBeforeTripPlan = '';                         // additional message to console.log
  let sayBeforeTotal = '';                            // additional message to console.log

  // test to see if the user need to catch the train at all /////////////////////

  const stay = (startIndex === endIndex) && (sL === eL) || ((sL !== eL) && (start === network[sL].interchange[0]) && (end === network[eL].interchange[0]));
  if (stay) { console.log (`\n-------------------------------------\n You are here, no need to choo choo\n-------------------------------------\n `); return; }; // fix this ////////

  // test to see what kind of interchange is required ///////////////////////////

  const interchange = requireInterchange(sL, start, eL, end);     // retured [array]
  if(interchange[0]) {
    // no confusion, interchange required - catches all [true, any, any]

    [destoA, legA] = oneLegOfTrip(sL, startIndex, interchange[1]);
    [destoB, legB] = oneLegOfTrip(eL, interchange[2], endIndex);
  } else if (interchange[1]) {
    // startLine confusion - only [false, true, boolean] will flow in

    startIndex = network[eL].stops.indexOf(start);
    [destoA, legA] = oneLegOfTrip(eL, startIndex, endIndex);
    startLine = endLine;
    sayBeforeTripPlan += `\n------------------------------------\n Please move to (${ endLine }) Train platforms\n------------------------------------\n `;
  } else if (interchange[2]) {
    // endLine confusion - only [false, false, true] will flow in

    endIndex = network[sL].stops.indexOf(end);
    [destoA, legA] = oneLegOfTrip(sL, startIndex, endIndex);
    sayBeforeTotal += `\n-----------------------------\n Alight at [${network[sL].interchange[0] }]\n Walk to (${ endLine }) Train platforms\n-----------------------------\n `
    endLine = startLine;
  } else {
    // no confusion, no interchange required - only [false, false, false] will flow in

    [destoA, legA] = oneLegOfTrip(sL, startIndex, endIndex);
  }

  // announce final messages with all required information //////////////////////////

  announceAll(startLine, legA, destoA, endLine, legB, destoB, sayBeforeTripPlan, sayBeforeTotal);
};

function lineExists (sL, eL) {
  // returns [boolean, boolean] for ['sL', 'eL'] if they exist in {network}

  return [Object.keys(network).includes(sL), Object.keys(network).includes(eL)];
};

function stationExists (sL, start, eL, end) {
  // returns [boolean, boolean] for ['start', 'end'] if they exist in {network}.[sL, eL].stops

  return [network[sL].stops.includes(start), network[eL].stops.includes(end)];
};

function requireInterchange (sL, start, eL, end) {
  // checks what type of interchange is required
  // returns [true, 'string', 'string'] for [interchange required, 'sL get off at', 'eL get on at']
  // returns [false, true, false] if user is confused about startLine involving interchange station
  // returns [false, false, true] if user is confused about endLine involving interchange station
  // returns [false, false, false] if interchange is not required (same line travel)

  if (sL !== eL && start === network[eL].interchange[0]) {
    return [false, true, false];
  } else if (sL !== eL && end === network[sL].interchange[0]) {
    return [false, false, true];
  } else if (sL !== eL) {
    const interchange = network[sL].interchange;
    return [true, network[sL].stops.indexOf(interchange[0]), network[eL].stops.indexOf(interchange[0])]; 
  } else {
    return [false, false, false];
  }
};

function oneLegOfTrip (line, startIndex, endIndex) {
  // returns ['string', [array]] for ['terminal', ['nextStops']] for one leg of journey

  let nextStops = [];
  let desto;
  
  if (startIndex < endIndex) {          // DN direction

    for (let i = startIndex + 1; i <= endIndex; i++) {      // loop down array
      nextStops.push(network[line].stops[i]);
    }
    desto = network[line].stops.at(-1);                     // last element in [stations]
  } else {                              // UP direction

    for (let i = startIndex - 1; i >= endIndex; i--) {      // loop up array
      nextStops.push(network[line].stops[i]);
    }
    desto = network[line].stops.at(0);                      // first element in [stations]
  };
  return [desto, nextStops];
};

function announceAll (startLine, legA, destoA, endLine, legB, destoB, sayBeforeTripPlan, sayBeforeTotal) {
  // concatenates and console.log all messages in correct order

  let announcement = announceOneLeg(startLine, legA, destoA);     // returned [array]
  let numStop = announcement[0];
  let message = '';

  if (sayBeforeTripPlan !== '') {
    message += sayBeforeTripPlan;
  };

  message += announcement[1];

  if (legB !== undefined) {
    message += `\n-----------------------------------------\n Change at [${ legA.at(-1) }] for (${ endLine }) Train\n-----------------------------------------\n`;
    let legBMessage = announceOneLeg(endLine, legB, destoB);    // returned [array]
    numStop += legBMessage[0];
    message += legBMessage[1];
  };

  if (sayBeforeTotal !== '') {
    message += sayBeforeTotal 
  };

  message += `\n-------------------\n Total: ${ numStop } stop(s)\n-------------------\n `;

  console.log(message);
};

function announceOneLeg (line, leg, desto) {
  // returns [number, 'message'] for [number of stops, 'list of next stops'] in one leg

  const message = `\nContinue on (${ line }) Train towards [${ desto }]\n\nNext stop(s):\n\n${ leg.join('\n') }\n `;
  return [leg.length, message];
};