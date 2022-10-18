subway = {
    :N =>['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    :L =>['8th', '6th', 'Union Square', '3rd', '1st'],
   '6' =>['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
   }
   routes = []

   def sameLine(lineOn, stationOn, lineOff, stationOff)
     stationOnIndex = subway[lineOn].find_index(stationOn)
     stationOffIndex = subway[lineOff].find_index(stationOff)

     if (stationOn > stationOff ){
        for stationOnIndex in stationOffIndex
          puts 
          routes.push{
            line => lineOn
            station => [lineOn][index]
          }
        end
     }
   end 
   