# Calculator
# Explanation

#     You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:

#     A user should be given a menu of operations
#     A user should be able to choose from the menu
#     A user should be able to enter numbers to perform the operation on
#     A user should be shown the result
#     This process should continue until the user selects a quit option from the menu


def show_menu
    puts "Calculator" #TODO: check out .center to make this look nicer
    puts "=-" * 40 #Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponents"
    puts "[sq] - Square Root"
    puts "[mort] - Mortgage Calculator"
    puts "[bmi] - BMI Calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def add(a,b)
    a + b
end

def subtract(a,b)
    a - b
end

def divide(a,b)
    a / b
end

def multiply(a,b)
    a * b
end

def exponents(a,b)
    a ** b
end

def squareroot(a)
    Math.sqrt(a)
end

def mortgage(p,int,months)
    first = 1 + int
    second = first ** months
    third = second * int
    fourth = p * third
    fifth = second - 1
    fourth / fifth
end

def bmi(w,h)
    first = h ** 2
    w / first
end

until menu_choice == 'q'
    case menu_choice
    when 'a'
        print "You chose addition! Put in your first number: "
        a = gets.to_i
        print "Put in your second number: "
        b = gets.to_i
        puts "The sum is #{ add(a,b) }"
    when 's'
        print "You chose subtraction! Put in your first number: "
        a = gets.to_i
        print "Put in your second number: "
        b = gets.to_i
        puts "The difference is #{ subtract(a,b) }"
    when 'd'
        print "You chose division! Put in your first number: "
        a = gets.to_i
        print "Put in your second number: "
        b = gets.to_i
        puts "The quotient is #{ divide(a,b) }"
    when 'm'
        print "You chose multiplication! Put in your first number: "
        a = gets.to_i
        print "Put in your second number: "
        b = gets.to_i
        puts "The product is #{ multiply(a,b) }"
    when 'e'
        print "You chose the exponent operator! Put in your base number: "
        a = gets.to_i
        print "Put in the power number:"
        b = gets.to_i
        puts "The value is #{ exponents(a,b) }"
    when 'sq'
        print "You chose the square root operator! Put in the number: "
        a = gets.to_i
        puts "The value is #{ squareroot(a) }"
    when 'mort'
        print "You chose the mortgage calculator! Put in your P value (total amount of your loan): "
        p = gets.to_i
        print "Put in your I value (interest rate as monthly percentage without %): "
        int = gets.to_f
        print "Put in your N value (total amount of months for payments): "
        months = gets.to_i
        puts "Your mortgage calculation is #{ mortgage(p, int, months) }"
    when 'bmi'
        print "You chose the BMI calculator! Put in your weight in kilograms: "
        w = gets.to_i
        print "Put in your height in meters: "
        h = gets.to_i
        puts "Your BMI is #{ bmi(w,h) }"
    else 
        puts 'Invalid selection.'
    end
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"


