# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# def initial
#     puts "=-"*40
#     puts "Welcome to transport system"
#     puts "=-"*40
#     puts "Please enter the your start line: "
#     startLine = gets.chomp
#     puts "Please enter your start station: "
#     startStation = gets.chomp
#     puts "Please enter the your end line: "
#     endLine = gets.chomp
#     puts "Please enter your end station: "
#     endStation = gets.chomp

    
# end
# subway={
#         :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],    
#         :L => ["8th", "6th", "Union Square", "3rd", "1st"],    
#         6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
#     }

@subway={
    "N" => {
        :name => "N",
        :route => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    },
    "L" => {
        :name => "L",
        :route => ["8th", "6th", "Union Square", "3rd", "1st"],
    },
    "6" => {
        :name => "6",
        :route => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    },
}

def plan_trip(startLine,startStation,endLine,endStation)
    if startLine == endLine
        startRoute=@subway[startLine][:route]
        startIndex = startRoute.find_index(startStation)
        endIndex = startRoute.find_index(endStation)
        if startIndex < endIndex
            routePoints =  startRoute[startIndex..endIndex]
        else
            routePoints = startRoute[endIndex..startIndex].reverse!
        end
        routeNumber = (startIndex-endIndex).abs+1
        # puts routeNumber
        # puts routePoints
        puts "=-"*40
        puts "You must travel through the following stops on the #{startLine} line: #{routePoints}."
        puts "#{routeNumber} stops in total."
        puts "=-"*40
    else
        startRoute = @subway[startLine][:route]
        endRoute = @subway[endLine][:route]
        startIndex = startRoute.find_index(startStation)
        endIndex = endRoute.find_index(endStation)
        startTransIndex = startRoute.find_index("Union Square")
        endTransIndex = endRoute.find_index("Union Square")
        if startIndex < startTransIndex
            startRoutePoints =  startRoute[startIndex..startTransIndex]
        else
            startRoutePoints = startRoute[startTransIndex..startIndex].reverse!
        end

        if endIndex < endTransIndex
            endRoutePoints =  endRoute[endIndex..endTransIndex-1].reverse!
        else
            endRoutePoints = endRoute[endTransIndex+1..endIndex]
        end
        routeNumber = (startIndex-startTransIndex).abs+(endIndex-endTransIndex).abs+2
        
        # puts routeNumber
        # puts startRoutePoints
        # puts endRoutePoints
        puts "=-"*40
        puts "You must travel through the following stops on the #{startLine} line: #{startRoutePoints}."
        puts "Change at Union Square."
        puts "Your journey continues through the following stops on the #{endLine} line: #{endRoutePoints}."
        puts "#{routeNumber} stops in total."
        puts "=-"*40
    end
end


plan_trip('N', '23rd', 'N', 'Times Square')
plan_trip('N', 'Times Square', 'N', '23rd')

plan_trip('N', 'Times Square', '6', '33rd')
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)