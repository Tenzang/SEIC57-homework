
# # Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

def show_menu
    puts "Calculator"
    puts "=-"*40
    puts "[a] - Addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[b] - BMI"
    puts "[m] - mortgage"
    puts "[t] - trip"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def addition
    puts "Please enter the first number: "
    num1 = gets.to_i
    puts "Please enter the second number: "
    num2 = gets.to_i
    puts "#{num1} + #{num2} = #{num1+num2}"
end

def subtraction
    puts "Please enter the minuend: "
    num1 = gets.to_i
    puts "Please enter the subtrahend: "
    num2 = gets.to_i
    puts "#{num1} - #{num2} = #{num1-num2}"
end

def multiplication
    puts "Please enter the first number: "
    num1 = gets.to_i
    puts "Please enter the second number: "
    num2 = gets.to_i
    puts "#{num1} * #{num2} = #{num1*num2}"
end

def division
    puts "Please enter the dividend: "
    num1 = gets.to_f
    puts "Please enter the divisor: "
    num2 = gets.to_f
    puts "#{num1} / #{num2} = #{num1/num2}"
end

def bmi
    puts "Please enter the height(M): "
    height = gets.to_f
    puts "Please enter the weight(KG): "
    weight = gets.to_f
    puts "BMI = #{(weight/height**2).round(2)}"
end

def mortgage
    puts "Please enter the total amount of your loan: "
    amount = gets.to_f
    puts "Please enter your interest rate: "
    interest = gets.to_f
    puts "Please enter the total amount of months: "
    months = gets.to_f
    puts "Your mortgage is #{(amount*(1+interest)**months/((1+interest)**months-1))}."
end

def trip
    puts "Please enter the total distance of your trip: "
    distance = gets.to_f
    puts "Please enter miles per gallon: "
    miles = gets.to_f
    puts "Please enter the price per gallon: "
    price = gets.to_f
    puts "Please enter the speed in miles per hour: "
    speed = gets.to_f
    puts "Your trip will cost $#{distance/miles*price} and #{distance/speed} hours."
end
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


until menu_choice =='q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Actual addition coming soon"
        addition
    when 's'
        puts "You chose subtraction!"
        puts "Actual subtraction coming soon"
        subtraction
    when 'm'
        puts "You chose multiplication!"
        puts "Actual multiplication coming soon"
        multiplication
    when 'd'
        puts "You chose division!"
        puts "Actual division coming soon"
        division
    when 'b'
        puts "You chose BMI!"
        bmi
    when 'm'
        puts "You chose mortgage!"
        mortgage
    when 't'
        puts "You chose trip!"
        trip
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calulator"