MTA={
    'N'=>['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L'=>['8th', '6th', 'Union Square', '3rd', '1st'],
    '6'=>['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def get_inputs(on_line,on_stop,off_line,off_stop)
    # commented out for the sake of my sanity
    # print "What line are you getting on: "
    # on_line = gets.chomp
    # print "What stop are you getting on: "
    # on_stop = gets.chomp
    # print "What line are you getting off: "
    # off_line = gets.chomp
    # print "What stop are you getting off at: "
    # off_stop = gets.chomp
    find_stops(on_line,on_stop,off_line,off_stop)
end

def find_stops(on_line,on_stop,off_line,off_stop)
        transfer_message = ["Change at Union square to the #{off_line}"]
        on_index = MTA[on_line].index on_stop #finds index of the stop
        off_index = MTA[off_line].index off_stop #finds index of the stop
        transfer_off_index = MTA[on_line].index 'Union Square' #finds index of the transfer
        transfer_on_index = MTA[off_line].index 'Union Square' #finds index of the transfer
        if on_line==off_line
            trip = find_trip(on_line,on_index,off_index) # returns an array of stops
        else
            trip1 = find_trip(on_line,on_index,transfer_off_index) # returns an array of stops
            trip1.pop # removes the tranfer
            trip2 = find_trip(off_line,transfer_on_index,off_index) # returns an array of stops
            trip = trip1+transfer_message+trip2 # makes a single array with the transfer message
        end
        display(trip,on_line)
end

def find_trip(on_line,on_index,off_index)
    if on_index>off_index
        trip = MTA[on_line][off_index..on_index].reverse.drop(1) #pulls out all the stops on the array and reverses it for backwards. drop removes starting location
    else
        trip = MTA[on_line][on_index..off_index].drop(1) #pulls out all the stops on the array,drop removes starting location
    end
end

def display(trip,on_line)
    puts "You must travel on the follow stops on the #{on_line}: "
    puts trip 
end


get_inputs('N','Times Square','N',"28th")
get_inputs('N',"28th",'N','Times Square')
get_inputs('N',"28th",'6','Grand Central')
