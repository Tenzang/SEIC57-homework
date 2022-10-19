# plan_trip 'N', 'Times Square', '6', '33rd' 
# This is only a suggested function name and signature.

# `puts` shows output similar to this:
# "You must travel through the following stops on the N Line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

trainlines = {
    :N => ["Times Square", "34th", "N-28th", "N-23rd", "Union Square", "N-8th"],
    :L => ["L-8th", "6th", "Union Square", "3rd", "1st"],
    :S => ["Grand Central", "33rd", "6-28th", "6-23rd", "Union Square", "Astor Place"]
}

def stationToUnion(SelectLine, SelectUnion, SelectStation)
    if SelectStation > SelectUnion 
        return "#{(SelectLine[SelectUnion..SelectStation]).reverse()}\n\n" # when SelectStation > SelectUnion, slice from SelectUnion, then reverse the array to shuffle back to correct order. 
        # Add 1 when slicing as it is off by 1
    else 
        BACKTRIP = "#{(SelectLine[SelectStation...SelectUnion]).reverse()}\n\n" #find what stations are in between the two stations on the return trip
        # Reverse array to get correct order, then splice off 'Union Square' from array, as it is unneccessary
        BACKTRIP.slice!(BACKTRIP[SelectUnion], 1)
        return BACKTRIP    
end

def firstTrip(Line, Station) 
    SelectLine = trainlines[Line]
    SelectStation = trainlines[Line].index(Station)
    SelectUnion = trainlines[Line].index("Union Square") #isolate Union square for QoL

    if (SelectStation > SelectUnion) 
        return stationToUnion(SelectLine, SelectUnion, SelectStation)
    else 
        return SelectLine[SelectStation..SelectUnion] #find what stations are in between the two stations
        # Union Square is included in the first trip, to record total stops.
end

def secondTrip(Line, Station) 
    SelectLine = trainlines[Line]
    SelectStation = trainlines[Line].index(Station)
    SelectUnion = trainlines[Line].index("Union Square") #isolate Union square for QoL

    if (SelectStation < SelectUnion) 
        return stationToUnion(SelectLine, SelectUnion, SelectStation)
    else 
        BACKTRIP = SelectLine[SelectUnion..SelectStation] #find what stations are in between the two stations on the return trip
        # Slice from SelectUnion to SelectStation plus 1, to account for being one off
        BACKTRIP.slice!(BACKTRIP[SelectUnion], 1) # Splice off Union Square as it is not necessary for second trip log
        return BACKTRIP
end

def sameLine(Line, StationStart, StationEnd) 
    SelectLine = trainlines[Line]
    TopStation = trainlines[Line].index(StationStart)
    BottomStation = trainlines[Line].index(StationEnd) #isolate Union square for QoL

    if (BottomStation < TopStation) 
        return "#{(SelectLine[BottomStation..TopStation]).reverse()}\n\n" 
        #slice from end (BottomStation), then reverse Array to get correct order of Array
    else 
        return SelectLine[TopStation..BottomStation]
        #if BottomStation > TopStation, return array plus the last stop
end

def startEndUnion(LineStart, StationStart, LineEnd, StationEnd) 
    if (StationStart === "Union Square") 
        puts `You are travelling from #{StationStart} to #{StationEnd}, on the #{LineEnd} Line.`
    else 
        puts `You are travelling from #{StationStart} on the #{LineStart} Line, to #{StationEnd}.`
end

def planTravel(LineStart, StationStart, LineEnd, StationEnd) 
    if (LineStart === LineEnd || (StationStart && StationEnd) === "Union Square")
        #See if travel is on same Line or remaining at Union Square

        if (StationStart === StationEnd) 
            puts `You are staying at the same location. Please select two different stations to travel.`
        #If traveller is staying at same Station

        #Check if travel is on the same Line to different Station
        SingleLine = sameLine(LineStart, StationStart, StationEnd)
        puts `You are travelling on the #{LineStart} Line, from #{SingleLine[0]} to #{SingleLine.last}.`
    else
        #Check if travel is to/from Union Square
        if (StationStart === "Union Square" || StationEnd === "Union Square") 
            return startEndUnion(LineStart, StationStart, LineEnd, StationEnd)
        else 
            if (LineStart !== LineEnd) 
                TripOne = firstTrip(LineStart, StationStart)
                TripTwo = secondTrip(LineEnd, StationEnd)
                TotalStops = TripOne.concat(TripTwo).last + "stops in total.";
                #Using concat method to merge the two arrays and to minus 1 as Union Square is repeated.
                puts `You are travelling through the following stops on the #{LineStart} Line, #{TripOne[1..."TripOne".length].join(', ')}. Then change at Union Square. Continue your trip on the #{LineEnd} Line, travelling through #{TripTwo.join(', ')}. It will be #{TotalStops}.`
             else 
                return "Invalid Parameters. Please enter valid Station names."
end            