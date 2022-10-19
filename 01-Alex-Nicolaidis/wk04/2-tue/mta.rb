require "pry"
#MTA attempt 2
#sort the train lines in a hash
@lines = {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "8th"]
}

#Work out how to travel on 1 line
starting_line = "N"
start_station = "Times Square"
ending_line = "6"
end_station = "33rd"

def trip_leg line, start, stop
    line_stations = @lines[line.to_sym] #convert input string to a symbol
    #find the index of the start and stop position in the train list arary
    start_index = line_stations.find_index(start)
    stop_index = line_stations.find_index(stop)
    #check if we are going forward or backwards
    if start_index < stop_index
        line_stations[start_index+1..stop_index]
    else
        reverse_stations = line_stations.reverse
        reverse_stations[reverse_stations.find_index(start)+1 ..reverse_stations.find_index(stop)]
    end
end

def plan_trip start_line, start_station, end_line, end_station
    if start_line == end_line
        trip_array = trip_leg start_line, start_station, end_station
        puts "Your must travel through the following stops on the #{ start_line }: #{ trip_array.join(", ")}."
        puts "#{trip_array.size} stops in total"
    else
        change_station = "Union Square"
        leg_1 = trip_array = trip_leg start_line, start_station, change_station
        leg_2 = trip_array = trip_leg end_line, change_station, end_station
        total_stops = (leg_1 + leg_2).size
        puts "Your must travel through the following stops on the #{ start_line }: #{ leg_1.join(", ")}."
        puts "Change at Union Square"
        puts "Your journey continues through the following stations on the #{ end_line }: #{ leg_2.join(", ")}."
        puts "#{ total_stops } stops in total"
    end
end

plan_trip starting_line, start_station, ending_line, end_station





