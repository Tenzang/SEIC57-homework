# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def calculate_trip(distance, km_per_liter, price_per_liter, km_h)
    fuel_amount = distance / km_per_liter.to_f
    return {
        cost: fuel_amount * price_per_liter,
        time: ((distance / km_h.to_f).round(2) * 60).round
    }
end

trip_calculo = calculate_trip(200, 2, 2, 55)

print "The fuel cost will be #{trip_calculo[:cost]}. This trip will take #{trip_calculo[:time]} minutes."