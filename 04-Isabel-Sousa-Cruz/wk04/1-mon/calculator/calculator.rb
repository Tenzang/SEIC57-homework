def show_menu
    puts "Calculator".center(80, "=-")
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponation"
    puts "[sr] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

def prompt_numbers
    print "Type the numbers you want to make the operation separeted by a space: "
    return gets.chomp.split(" ").map(&:to_i)
end

def perform_operation(x, y, operator) 
    return case operator
        when "+"
            x + y
        when "-"
            x - y
        when "*"
            x * y
        when "/"
            x / y
        when "**"
            x ** y
        when "sr"
            Math.sqrt(x)
        end
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
    puts "\n"
    puts case menu_choice
    when "a"
        puts "You chose addition"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], chosen_numbers[1], "+")
        "#{chosen_numbers[0]} + #{chosen_numbers[1]} is #{result}"
    when "s"
        puts "You chose subtraction"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], chosen_numbers[1], "-")
        "#{chosen_numbers[0]} - #{chosen_numbers[1]} is #{result}" 
    when "m"
        puts "You chose multiplication"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], chosen_numbers[1], "*")
        "#{chosen_numbers[0]} * #{chosen_numbers[1]} is #{result}" 
    when "d"
        puts "You chose division"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], chosen_numbers[1], "/")
        "#{chosen_numbers[0]} / #{chosen_numbers[1]} is #{result}" 
    when "e"
        puts "You chose exponential"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], chosen_numbers[1], "**")
        "#{chosen_numbers[0]}^#{chosen_numbers[1]} is #{result}" 
    when "sr"
        puts "You chose division"
        chosen_numbers = prompt_numbers
        result = perform_operation(chosen_numbers[0], nil, "sr")
        "#{chosen_numbers[0]} squared is #{result}" 
    else 
        "Invalid selection."
    end
    
    puts "\n"
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"