def show_menu
    puts "Calculator" #todo: check out. center to make this look nicer
    puts "=-"*40 #budget horizontal dividing lane
    puts "[a] - Addition"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[s] - Substract"
    puts "[e] - Exponent"
    puts "[sq] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You choose addition! Enter your first number here:"
        num1 = gets.chomp.to_f
        puts "Enter your second number:"
        num2 = gets.chomp.to_f
        puts (num1 + num2)
    when 'm'
        puts "You choose multiplication! Enter your first number here:"
        num1 = gets.chomp.to_f
        puts "Enter your second number:"
        num2 = gets.chomp.to_f
        puts (num1 * num2)
    when 'd'
        puts "You choose division! Enter your first number here:"
        num1 = gets.chomp.to_f
        puts "Enter your second number:"
        num2 = gets.chomp.to_f
        puts (num1 / num2)
    when 's'
        puts "You choose substraction! Enter your first number here:"
        num1 = gets.chomp.to_f
        puts "Enter your second number:"
        num2 = gets.chomp.to_f
        puts (num1 - num2)
    when 'e'
        puts "You choose exponent! Enter your first number here:"
        num1 = gets.chomp.to_f
        puts "Enter your second number:"
        num2 = gets.chomp.to_f
        puts (num1 ** num2)
    when 'sq'
        puts "You choose square root! Enter your number here:"
        num1 = gets.chomp.to_f
        puts Math.sqrt(num1)
    else
        puts "Invalid selection"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thank you for using this crappy calculator "

