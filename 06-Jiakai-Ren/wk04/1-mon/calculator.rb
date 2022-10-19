# Jiakai Ren - Wk04 Mon Homework

# Calculator
require 'rainbow'

def show_menu
    puts "=-" * 40
    puts "Calculator".center(80)
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponential"
    puts "[r] - Root"
    puts "[g] - Mortgage"
    puts "[b] - Body Mass Index"
    puts "[t] - Trip calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    puts case menu_choice
    when 'a'
        "You chose addition!"
    when 's'
        "You chose subtraction!"
    when 'm'
        "You chose multiplication!"
    when 'd'
        "You chose division!"
    when 'e'
        "You chose exponential!!"
    when 'r'
        "You chose root!!!"
    when 'g'
        "You chose mortage!!!!!"
    when 'b'
        "You chose Body Mass Index!"
    when 't'
        "You chose trip calculator!"
    else
        Rainbow("Invalid selection. You idiot.").bg(:red)
    end

    case menu_choice
    when 'a', 's', 'm', 'd'
        print "What is the first number: "
        num_1 = gets.to_f
        print "What is the second number: "
        num_2 = gets.to_f
    when 'e'
        print "What is the base: "
        exp_base = gets.to_f
        print "What is the exponent: "
        exponent = gets.to_f
    when 'r'
        print "What is the base of root: "
        root_base = gets.to_f
        print "What is the index of root: "
        index = gets.to_f
    when 'g'
        print "What is your principle (number only): "
        pr = gets.to_f
        print "What is your yearly interest rate in percentage (number only): "
        ra = gets.to_f
        print "How many years of mortgate left: "
        mo = gets.to_f * 12
    when 'b'
        print "What is your mass (in kg): "
        mass = gets.to_f
        print "What is your height (in m): "
        height = gets.to_f
    when 't'
        print "How many miles are you travelling (number only): "
        distance = gets.to_f
        print "What's your car's MPG (number only): "
        mpg = gets.to_f
        print "What's the fuel price (number only - $/gallon): "
        fuel_price = gets.to_f
        print "How fast are you travelling (number only - mph): "
        speed = gets.to_f
    end

    puts case menu_choice
    when 'a'
        Rainbow("The answer is #{ num_1 + num_2 }").blue.bg(:yellow)
    when 's'
        Rainbow("The answer is #{ num_1 - num_2 }").blue.bg(:yellow)
    when 'm'
        Rainbow("The answer is #{ num_1 * num_2 }").blue.bg(:yellow)
    when 'd'
        Rainbow("The answer is #{ num_1 / num_2 }").blue.bg(:yellow)
    when 'e'
        Rainbow("#{ exp_base } to the power of #{ exponent } is #{ exp_base ** exponent }").blue.bg(:yellow)
    when 'r'
        Rainbow("The #{ index }(st/nd/th) root of #{ root_base } is #{ root_base ** (1 / index) }").blue.bg(:yellow)
    when 'g'
        Rainbow("You have to pay $#{ ((pr * (ra*0.01/12) * ((1 + ra*0.01/12) ** mo)) / (((1 + ra*0.01/12) ** mo) - 1)).round(2) } per month").blue.bg(:yellow)
    when 'b'
        Rainbow("Your BMI is #{ (mass / (height ** 2)).round(2) }").blue.bg(:yellow)
    when 't'
        Rainbow("You will travel for #{ (distance / speed).round(2) } hours and it'll cost you $#{ (distance / mpg * fuel_price).round(2) }").blue.bg(:yellow)
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"