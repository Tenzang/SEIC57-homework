INTERSECTION_STOP = "Union Square"
TRAVEL_TYPE = "travel"
CHANGE_TYPE = "change"

def line_factory(line_name, stop_names)
    return {
        :line => line_name,
        :stops => stop_names
    }
end

line_n_stops = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
line_l_stops = ["8th", "6th", "Union Square", "3rd", "1st"]
line_6_stops = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
@all_lines = [line_factory("N", line_n_stops), line_factory("L", line_l_stops), line_factory("6", line_6_stops)]

def get_line_stops(line_name)
    (@all_lines.length).times do |i|
        return @all_lines[i][:stops] if @all_lines[i][:line] == line_name
    end
    return nil
end

def get_stops(from_stop_index, to_stop_index, line_stops)
    if from_stop_index < to_stop_index
        line_stops[(from_stop_index + 1)..(to_stop_index)] # inclusive range
    else
        line_stops[to_stop_index...from_stop_index].reverse # exclusive range
    end
end

def travel_to_intersection(from_stop, line_stops)
    intersection_stop_index = line_stops.find_index(INTERSECTION_STOP);
    from_stop_index = line_stops.find_index(from_stop);

    get_stops(from_stop_index, intersection_stop_index, line_stops);
end

def travel_from_intersection(to_stop, line_stops)
    intersection_stop_index = line_stops.find_index(INTERSECTION_STOP);
    to_stop_index = line_stops.find_index(to_stop);

    get_stops(intersection_stop_index, to_stop_index, line_stops);
end

def plan_trip(start_line_name, start_stop, end_line_name, end_stop)
    trip = []
    if start_line_name === end_line_name && start_stop === end_stop
        return trip
    end

    start_line_stops = get_line_stops(start_line_name)
    end_line_stops = get_line_stops(end_line_name) # || return nill

    unless start_line_stops && end_line_stops
        return nil
    end
    
    if start_line_name == end_line_name
        start_stop_index = start_line_stops.find_index(start_stop)
        end_stop_index = end_line_stops.find_index(end_stop)
        
        unless start_stop_index && end_stop_index 
            return nil
        end

        trip.push({
            :type => TRAVEL_TYPE,
            :line => start_line_name,
            :stops => get_stops(start_stop_index, end_stop_index, start_line_stops)
        })
        return trip
    end

    if end_stop === "Union Square" 
        trip.push({
            :type => TRAVEL_TYPE,
            :line => start_line_name,
            :stops => travel_to_intersection(start_stop, start_line_stops)
        }, {
            :type => CHANGE_TYPE,
            :line => INTERSECTION_STOP
        }, {
            :type => TRAVEL_TYPE,
            :line => end_line_name,
            :stops => []
        })

    else 
        trip.push({
            :type => TRAVEL_TYPE,
            :line => start_line_name,
            :stops => travel_to_intersection(start_stop, start_line_stops)
        }, {
            :type => CHANGE_TYPE,
            :line => INTERSECTION_STOP
        }, {
            :type => TRAVEL_TYPE,
            :line => end_line_name,
            :stops => travel_from_intersection(end_stop, end_line_stops)
        })
    end
    return trip
end

def print_trip_info(trip) 
    unless trip 
        puts "Stop or line not found!"
        return
    end

    if trip.empty?
        puts "You are already on your end line and stop"
        return
    end

    (trip.length).times do |i|
        trip_leg = trip[i]
        if i == trip.length - 1 && trip_leg[:stops].empty?
            puts "Your final destination is on #{INTERSECTION_STOP} on line #{trip_leg[:line]}"
            return
        end

        if trip_leg[:type] == TRAVEL_TYPE && i == 0
            puts "You must travel through the following stop(s) on the #{trip_leg[:line]} line: #{trip_leg[:stops].join(", ")}."
        elsif trip_leg[:type] == TRAVEL_TYPE
            puts "Your journey continues on the #{trip_leg[:line]} line through the following stop(s): #{trip_leg[:stops].join(", ")}."
        elsif trip_leg[:type] == CHANGE_TYPE
            puts "Change at #{trip_leg[:line]}"
        end
    end
end

random_line_hash1 = @all_lines.sample
random_start_line = random_line_hash1[:line]
random_start_stop = random_line_hash1[:stops].sample

random_line_hash2 = @all_lines.sample
random_end_line = random_line_hash2[:line]
random_end_stop = random_line_hash2[:stops].sample

puts "You are at line #{random_start_line} stop #{random_start_stop}, and you want to go to #{random_end_line} stop #{random_end_stop}"
print_trip_info(plan_trip(random_start_line, random_start_stop, random_end_line, random_end_stop))