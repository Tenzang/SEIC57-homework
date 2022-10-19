require "pry"
require "rainbow"

# Jiakai Ren - wk04 Homework 
# # MTA Lab

@network = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip (sl, ss, el, es)

    if !@network.keys.include?(sl) || !@network.keys.include?(el)
        puts Rainbow("Line(s) do(es) not exist").bg(:red)
        return
    elsif !@network[sl].include?(ss) || !@network[el].include?(es)
        puts Rainbow("Station(s) do(es) not exist! ").bg(:red)
        return
    elsif (sl == el && ss == es) || (sl != el && ss == "Union Square" && es == "Union Square")
        puts Rainbow("No need to choo choo").bg(:red)
        return
    end

    stop_count = 0

    (sl != el) ? es_temp = "Union Square" : es_temp = es
    one_leg = single_trip(sl, ss, es_temp)
    stop_count += one_leg[0].length
    puts Rainbow("Continue on the (#{ sl }) train towards [#{ one_leg[1] }]. Next stop(s):").bg(:blue).color(:orange)
    puts Rainbow(one_leg[0].join(' -> ')).bg(:orange).color(:blue)
    
    if sl != el
        one_leg = single_trip(el, "Union Square", es)
        stop_count += one_leg[0].length
        puts Rainbow("Change at [Union Square] for (#{ el }) train towards [#{ one_leg[1] }]. Next stop(s):").bg(:blue).color(:orange)
        puts Rainbow(one_leg[0].join(' -> ')).bg(:orange).color(:blue)
    end

    puts Rainbow("Total: #{ stop_count } stop(s).").bg(:yellow).color(:black)
end

def single_trip (line, ss, es)
    this_line = @network[line]
    s_i = this_line.index ss
    e_i = this_line.index es
    if s_i < e_i
        leg = this_line[s_i + 1..e_i]
        desto = this_line.last
    else
        leg = this_line[e_i...s_i].reverse
        desto = this_line.first
    end
    return [leg, desto]
end

binding.pry

# plan_trip("6", "Grand Central", "L", "1st")
# plan_trip('N', '34th', 'N', '23rd')
# plan_trip('N', '34th', '6', 'Grand Central')