# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

def show_menu
    puts "Calculator" # .center to make this look nicer 
    puts "=-" * 40 #budget borizontal dividing line
    puts "Enter first value:"
    puts "Enter second value:"
    puts "[a] - Addition"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[s] - Substract"
    puts "[e] - Exponents"
    puts "[s] - Square roots"
    puts "[q] - Qiut"
    print "Enter your choice:"
end

show_menu
menu_choice = gets.chomp.downcase
num1 = gets.to_i
num2 = gets.to_i
puts "The 2 choice number is #{ number_choice1 } and #{ number_choice2 }."

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addtion!"
        puts "num1 + num2"
    when 'm'
        puts "You chose multiply!"
        puts "num1 * num2"
    when 'd'
        puts "You chose divide!"
        puts "num1 / num2"
    when 's'
        puts "You chose substract!"
        puts "num1 - num2"
    when 'q'
        puts "You chose qiut!"
        puts "End the programme"
    when 's'
        puts "You chose square root!"
        puts Math.sqrt(num)
    when 'e'
        puts "You chose exponents!"
        puts num1 ** num2


    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = get.chomp.downcase
end

puts "Thanks for using this crappy calculator"


# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)




# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)



puts "What is the interest rate: "
rate = gets.chomp.to_i

puts "what is the mortgage:"
loan = gets.chomp.to_i

puts "How many months in total:"
month = gets.chomp.to_i

puts rate * loan / 12 + loan /month





# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight



# Trip Calculator
# Calculate a trip time and cost given inputs for


# distance
# miles per gallon
# price per gallon
# speed in miles per hour