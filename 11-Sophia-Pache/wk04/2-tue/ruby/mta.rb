nLine = ['Times Square','34th','28th','23rd','Union Square','8th']
lLine = ['4th','3rd','Union Square','6th','8th']
sixLine = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']

def travel_array (line, start_index, stop_index)
    if (start_index < stop_index)
        result = line[start_index..stop_index]
        p result 
    else 
        result = line[stop_index..start_index].reverse()
        p result 
    end 
end

def trip_loop (line1, start, stop)
    start_index = line1.find_index(start)
    stop_index = line1.find_index(stop)
    travel_array(line1, start_index, stop_index)
end


trip_loop(nLine, 'Times Square', 'Union Square')
trip_loop(nLine, 'Union Square', 'Times Square')


def line_to_Union_Square (line1, start, stop='Union Square')
    start_index = line1.find_index(start)
    stop_index = line1.find_index('Union Square')
    travel_array(line1, start_index, stop_index)
end

def line_from_Union_Square (line2, stop, start='Union Square')
    start_index = line2.find_index('Union Square')
    stop_index = line2.find_index(stop)
    travel_array(line2, start_index, stop_index)
end


def plan_trip (line1, start, line2, stop)
    if (line1 == line2)
        stops_visited = trip_loop(line1, start, stop)
        puts "You must travel through the following stops: #{ stops_visited }. #{ stops_visited.length } stops in total."
    else
        stops1_visited = line_to_Union_Square(line1, start)
        stops2_visited = line_from_Union_Square(line2, stop)
        puts "You must travel through the following stops: #{ stops1_visited }. Change at Union Square. Your journey continues through the following stops: #{ stops2_visited }. #{stops1_visited.length + stops2_visited.length - 1} stops in total."
    end
end

plan_trip(nLine,'34th',sixLine,'Astor Place')