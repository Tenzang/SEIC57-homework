BMI_VALUES = [
    {
        range: (0...18.5),
        output: "You are very underweight and possibly malnourished."
    },
    {
        range: (18.5..24.9), 
        output: "You have a healthy weight range for young and middle-aged adults."
    },
    {
        range: (25.0..29.9), 
        output: "You are overweight"
    },
    {
        range: (30..100), 
        output: "You are obese."
    },
]

def bmi_calculator(weight, height)
    height_as_meter = height / 100.0
    height_squared = height_as_meter ** height_as_meter
    return (weight / height_squared).round(2)
end

result = bmi_calculator(40, 150)
(BMI_VALUES.length).times do |i|                 
    if BMI_VALUES[i][:range].member?(result)
        print "BMI result: #{result}. #{BMI_VALUES[i][:output]}"
    end
end