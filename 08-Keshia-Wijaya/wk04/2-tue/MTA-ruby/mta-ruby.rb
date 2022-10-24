# n_lines = ["Times Square", "34th", "28th", "23rd", "Union Square"]


# def stops_list
#     puts "MTA-Lab" 
#     puts "=-"*40
#     puts "Times Square" 
#     puts "34th"
#     puts "28th"
#     puts "23rd"
#     puts "Union Square"
#     puts "quit"
#     print "Enter your starting point here: "
# end

# stops_list
# stops_choice = gets.chomp.to_s
# stops_array = ["Times Square", "34th", "28th", "23rd", "Union Square"]


# until stops_list == "quit"
#     case stops_choice
#     when "Times Square"
#         puts "Enter your destination here: "
#         answer = gets.chomp
#         puts "So if you want to go to #{answer}, you need to stop at #{stops_array}. Total stops: #{stops_number}"
#     end
# end



data = ["Times Square","34th","28th","23rd","Union Square","8th"]

def destination (array, start, finish) 
    
    destination = array.index(finish)
    # puts destination
    depart = array.index(start)
    # puts depart
    total = destination - depart;



    stopsName = []
    for index in(depart..destination)
        stopsName.push(array[index])
        # puts "At position #{index}: #{array[index]}"
    end
    # return {stopsName, total}
    puts "#{total} stops"
    puts "The stops are: #{stopsName.join(', ')}"
end

destination(data, "23rd", "8th")