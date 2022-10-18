def add_function
    puts "What numbers to add?"
    n1 = gets.chomp.to_f
    n2 = gets.chomp.to_f
    answer = n1+n2
    puts "The sum is... #{answer}"
end

def divide_function
    puts "What numbers to divide?"
    n1 = gets.chomp.to_f
    n2 = gets.chomp.to_f
        answer = n1/n2 
        puts "The answer is... #{answer}"
end

def multiply_function
    puts "What numbers to multiply?"
    n1 = gets.chomp.to_f
    n2 = gets.chomp.to_f
        answer = n1*n2
        puts "The answer is... #{answer}"
end

def subtract_function
    puts "What numbers to subtract?"
    n1 = gets.chomp.to_f
    n2 = gets.chomp.to_f
    answer = n1-n2 
    puts "The answer is... #{answer}"
end

def exponent_function
    puts "What numbers to exponent to the power of?"
    n1 = gets.chomp.to_f
    n2 = gets.chomp.to_f
    answer = n1**n2 
    puts "The answer is... #{answer}"
end

def square_function
    puts "What number to square?"
    n1 = gets.chomp.to_f
    answer = n1*n1 
    puts "The answer is... #{answer}"
end

def show_menu
    puts "Calculator" # T000: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[d] - Division"
    puts "[m] - Multiplication"
    puts "[s] - Subtraction"
    puts "[exp] - Exponential"
    puts "[squ] - Square"
    # T000: add other operators here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
end 

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
case menu_choice[0]
when 'a'
    puts "You chose addition"
    add_function

when 'd'
    puts "You chose division"
    divide_function

when 'm'
    puts "You chose multiplication"
    multiply_function

when 's'
    puts "You chose subtraction"
    subtract_function

when 'exp'
    puts "You chose exponential"
    exponent_function

when 'squ'
    puts "You chose square"
    square_function

else
    puts "Invalid selection. You dummy."
end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"