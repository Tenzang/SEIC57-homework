const subway = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};
let ruotes = [];

function sameLine(lineOn, stationOn, lineOff, stationOff) {
  let stationOnIndex = subway[lineOn].indexOf(stationOn);
  console.log(subway[lineOn].indexOf(stationOn));
  let stationOffIndex = subway[lineOff].indexOf(stationOff);

  if (stationOnIndex > stationOffIndex) {
    for (let index = stationOnIndex; index >= stationOffIndex; index--) {
      ruotes.push({
        line: lineOn,
        station: subway[lineOn][index],
      });
    }
  } else {
    for (let index = stationOnIndex; index <= stationOffIndex; index++) {
      ruotes.push({
        line: lineOn,
        station: subway[lineOn][index],
      });
    }
  }

  ruotes;
}

function diferentLineOn(lineOn, stationOn) {
  let stationOnIndex = subway[lineOn].indexOf(stationOn);
  let unionSquareLineOn = subway[lineOn].indexOf("Union Square");

  if (stationOnIndex < unionSquareLineOn) {
    for (let index = stationOnIndex; index <= unionSquareLineOn; index++) {
      ruotes.push({
        line: lineOn,
        station: subway[lineOn][index],
      });
    }
  } else {
    for (let index = stationOnIndex; index >= unionSquareLineOn; index--) {
      ruotes.push({
        line: lineOn,
        station: subway[lineOn][index],
      });
    }
  }
  ruotes;
}

function diferentLineOff(lineOff, stationOff) {
  let unionSquareLineOff = subway[lineOff].indexOf("Union Square");
  let stationOffIndex = subway[lineOff].indexOf(stationOff);
  if (stationOffIndex <= unionSquareLineOff) {
    for (let index = stationOffIndex; index <= unionSquareLineOff; index++) {
      ruotes.push({
        line: lineOff,
        station: subway[lineOff][index],
      });
    }
  } else {
    for (let index = stationOffIndex; index >= unionSquareLineOff; index--) {
      ruotes.push({
        line: lineOff,
        station: subway[lineOff][index],
      });
    }
  }
  ruotes;
}

function planTrip(lineOn, stationOn, lineOff, stationOff) {
  if (lineOn === lineOff) {
    sameLine(lineOn, stationOn, lineOff, stationOff);
  } else if (lineOn !== lineOff) {
    diferentLineOn(lineOn, stationOn);
    diferentLineOff(lineOff, stationOff);
  }
  return ruotes;
}

console.log(planTrip("L", "8th", "L", "8th"));
