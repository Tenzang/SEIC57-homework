function stationFactory(line,name){
    return {
        name: name,
        line:line
    }
}

const N = [
    stationFactory('N','8th'),
    stationFactory('N','Union Square'),
    stationFactory('N','23rd'),
    stationFactory('N','28th'),
    stationFactory('N','35th'),
    stationFactory('N','Times Square')
]

const L = [
    stationFactory('L','8th'),
    stationFactory('L','6th'),
    stationFactory('L','Union Square'),
    stationFactory('L','3rd'),
    stationFactory('L','1st')
]

const six = [
    stationFactory('6','Grand Central'),
    stationFactory('6','33rd'),
    stationFactory('6','28th'),
    stationFactory('6','23rd'),
    stationFactory('6','Union Square'),
    stationFactory('6','Astor')
]

tripadvisor('6','Grand Central','6','23rd');
tripadvisor('6','23rd','6','Grand Central');
tripadvisor('6','23rd','L','3rd');

function planTrip()
{
    onLine = prompt("What line are you getting on")
    onStop = prompt("What stop on the line are you getting on")
    offLine = prompt("What line are you getting off")
    offStop = prompt("What stop on the line are you getting off")
    tripadvisor(onLine,onStop,offLine,offStop)
}

function tripadvisor(onLine,onStop,offLine,offStop){
    const on = findLine(onLine,onStop) // returns array with line and array index for stop
    const off = findLine(offLine,offStop)// returns array with line and array index for stop    
    if(onLine===offLine){
        const stops = legBuilder(on, off) //returns array of stops
        displayStops(stops);
    }else{
        const legOneOff = findLine(onLine,'Union Square') // returns array with line and array index for stop
        const legTwoOn = findLine(offLine,'Union Square') // returns array with line and array index for stop
        // console.log(legOneOff)
        const stops1 = legBuilder(on, legOneOff);//returns array of stops
        stops1[stops1.length-1]+=` ** change to ${offLine} line here**`; //directions to change and what line to change to
        const stops2 = legBuilder(legTwoOn, off);//returns array of stops
        const stops = stops1.concat(stops2) // joins arrays
        displayStops(stops);
    }
}

function findLine(line,stop){ // selects the appropriate array
    let station
    switch (line){
        case 'N': 
            station = findStop(N,stop);
            break;
        case 'L':
            station = findStop(L,stop);
            break;
        case '6':
            station = findStop(six,stop);
            break;
    }
    return station
}

//findLine('6','33rd');

function findStop(line,stop){
    for (let i=0;i<line.length;i++){
        if(line[i].name===stop){
            const station = [line, i];
            // console.log('stop found')
            return station;
        }
    }
}

function legBuilder(on,off){ // makes info more easily accessible and chooses a direction
    const arr = on[0];
    const start = on[1];
    const finish = off[1];
    // console.log(arr,start,finish)
    if(on>off){
        stops = backwards(arr,start,finish);
    }else{
        stops = forwards(arr,start,finish);
    }
    return stops;
}

function backwards(arr,on,off){ //loops through the line from point to point
    let stops = []
    for( let i = on-1;i>=off;i--){
        stops.push(arr[i].name);
    }
    return stops;
}

function forwards(arr,on,off){ //loops through the line from point to point
    let stops = []
    for( let i = on+1;i<=off;i++){
        stops.push(arr[i].name);
    }
    return stops;
}

function displayStops(stops){ 
    console.log(`${stops.length} stops`)
    console.log(stops.join(`\n`))
}