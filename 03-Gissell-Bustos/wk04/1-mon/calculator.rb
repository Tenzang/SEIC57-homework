def show_menu
    puts "CALCULATOR".center(30) # look method call .center
    puts "=-" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multipication"
    puts "[d] - divition"
    puts "[q] - Quit"
    print "Enter your Choice: "
end


def add(number1, number2)
    return number1  + number2
end 
def subtraction(number1, number2)
    return number1  - number2
end 
def multiplication(number1, number2)
    return number1  * number2
end 
def divition(number1, number2)
    return number1  / number2
end 

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
   puts case menu_choice

    when "a"
        "you choice addition"
        puts "write the firts number do you want to add: " 
        number1 = gets.to_i 
        puts "write the second number do you want to add:"  
        number2 = gets.to_i
        "the result of the sum is: #{add number1, number2}" 
        
    when "s"
        puts "you choice substration"
        puts "write the firts number do you want to subtract: " 
        number1 = gets.to_i 
        puts "write the second number do you want to subtract:"  
        number2 = gets.to_i
        "the result of the subtraction  is: #{subtraction number1, number2}" 
    
    when "m"
        puts "you choice substration"
        puts "write the firts number do you want to multiply: " 
        number1 = gets.to_i 
        puts "write the second number do you want to multiply:"  
        number2 = gets.to_i
        "the result of the multiplication is: #{multipication number1, number2}" 
        
    when "d"
            puts "you choice substration"
            puts "write the firts number do you want to divide: " 
            number1 = gets.to_i 
            puts "write the second number do you want to divide:"  
            number2 = gets.to_i
            "the result of the divition is: #{divition number1, number2}" 
    else 
        puts "invalid selection, you idiot"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end 

puts "thanks for using this crappy calculation"
