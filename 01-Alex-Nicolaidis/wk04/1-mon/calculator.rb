require 'rainbow'

def add_numbers 
    print "What is the first number: "
    a = gets.to_f
    print "What is the second number you would like to add to the first: "
    b = gets.to_f
    puts Rainbow("#{ a } + #{ b } = #{ a + b }").bg(:blue)
end

def subtract_numbers
    print "What is the first number: " 
    a = gets.to_f
    print "What would you like to subtract from the first number: "
    b = gets.to_f
    puts Rainbow("#{ a } - #{ b } = #{ a - b }").bg(:blue)
end

def multiply_numbers
    print "What is the first number: "
    a = gets.to_f
    print "What is the second number: "
    b = gets.to_f
    puts Rainbow("#{ a } x #{ b } = #{ a * b }").bg(:blue)
end

def divide_numbers
    print "What is the first number: "
    a = gets.to_f
    print "What is the second number: "
    b = gets.to_f
    puts Rainbow("#{ a } / #{ b } = #{ a / b }").bg(:blue)
end

def power
    print "What is the number: "
    a = gets.to_f
    print "What is the exponent: "
    b = gets.to_f
    puts Rainbow("#{ a } to the power of  #{ b } = #{ a ** b }").bg(:blue)
end

def square_root
    print "What number would you like to square root: "
    a = gets.to_f
    puts Rainbow("The square root of #{ a } = #{ Math.sqrt(a) }").bg(:blue)
end

def bmi 
    print "What is your height(cm)? "
    height = gets.to_f
    print "What is your weight(kgs)? "
    weight = gets.to_f
    bmi_value = (weight / (height/100)**2).round(2)

    case bmi_value
    when 0..18.5
        bmi_class = "Underweight"
    when 18.5..24.9
        bmi_class = "Normal"
    when 24.9..29.9
        bmi_class = "Overweight"
    when 29.9..34.9
        bmi_class = "Obese"
    else
        bmi_class = "Extremly Obese"
    end
    puts Rainbow("Your BMI is #{bmi_value} and you are classed as #{bmi_class}.").bg(:blue)
end

def monthly_repayments
    puts "How much is left on your loan? "
    loan = gets.to_f
    puts "What is your interest rate? "
    rate = gets.to_f
    puts "How many years left on your loan? "
    year = gets.to_f

    month_rate = rate/100/12
    months = year*12

    month_cost = (loan*((month_rate*((1+month_rate)**months))/((1+month_rate)**(months)-1))).round(2)

    puts Rainbow("Your monthly repayment is $#{month_cost}, considering a loan amount of $#{loan} a #{year} year term and a rate of #{rate}%.").bg(:blue)
end

def trip_info
    puts "How far do you have to travel? (km) "
    distance = gets.to_f
    puts "What speed will you travel at? (km/h) "
    speed = gets.to_f
    puts "What does fuel cost ($/L)"
    fuel_cost = gets.to_f
    puts "What is the consumption rate of fuel? (km/L) "
    fuel_consumption_rate = gets.to_f

    travel_time = distance / speed
    cost = fuel_cost / fuel_consumption_rate * distance
    
    puts Rainbow("The trip will cost $#{cost}.").bg(:blue)
    puts Rainbow("and it will take #{travel_time} hour.").bg(:blue)

end 




def show_menu
    puts "Calculator".center(70)
    puts "=-" * 40 #Budget horizontal line 
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[p] - Exponents"
    puts "[sq] - Square Root"
    puts "[bmi] - BMI Index"
    puts "[mlr] - Monthly repayment on a loan"
    puts "[trip] - Trip information"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition"
        add_numbers
    when 's'
        puts "You chose subtraction"
        subtract_numbers
    when 'm'
        puts "You chose multiplication"
        multiply_numbers
    when 'd'
        puts "You chose division"
        divide_numbers
    when 'p'
        puts "You chose exponenentiation"
        power
    when 'sq'
        puts "You chose square root"
        square_root
    when 'bmi'
        puts "You chose to calculate your BMI"
        bmi
    when 'mlr'
        puts "You chose to calculate your monthly loan repayment"
        monthly_repayments
    when 'trip'
        puts "You chose to get some trip information"
        trip_info
    else
        puts "Invalid Selection"
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts " Thanks for using the calculator"