def plan_trip (starLine, startStation, stopLine, stopStation)
    lines  = {
      :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      :L => ["8th", "6th", "Union Square", "3rd", "1st"],
      6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
  
    if starLine == stopLine
       start = lines[starLine].index(startStation)
       stop = lines[starLine].index(stopStation)
  
      if start > stop
          stations = lines[starLine][stop..start].reverse
      elsif start < stop
          stations =lines[starLine][start..stop]
      else
         message = "Come on, you are at #{stopStation} station"
      end
      if !message
      stops = stations.length-1
      puts "You have to travel on #{starLine} line via #{stations} after #{stops} stops you will reach #{stopStation}"
      else p message
      end
    end
  
    if starLine != stopLine
        unionSquareStart = lines[starLine].index("Union Square")
        unionSquareStop = lines[stopLine].index("Union Square")
        start = lines[starLine].index(startStation)
        stop = lines[stopLine].index(stopStation)
      if start > unionSquareStart
          stations = lines[starLine][unionSquareStart..start].reverse
      elsif start < unionSquareStart
          stations =lines[starLine][start..unionSquareStart]
      end
      if stop > unionSquareStop
         stations2 = lines[stopLine][unionSquareStop..stop]
      elsif stop < unionSquareStop
         stations2 = lines[stopLine][stop..unionSquareStop].reverse
      else
         message = "then you are at #{stopStation}"
      end
  
      puts "You have to travel on #{starLine} line via #{stations}"
      if !message
      stops = (stations + stations2).length-2
      puts "Change at Union Square to #{stopLine} line then via #{stations2}"
      puts "then you will reach #{stopStation},total #{stops} stops"
    else puts message
      end
  
    end
  end
  
  
  
  
  plan_trip( :N, "Times Square", :L, "8th")