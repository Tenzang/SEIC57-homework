def show_menu
    puts "Calculator" #method called center. makes this look nicer
    puts "-="*40
    puts "[a] Addition"
    puts "[s] Subtraction"
    puts "[m] Multiplication"
    puts "[d] Division"
    # add other options + / - etc.
    puts "[q] Quit"
    print "Enter your input: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    puts case menu_choice
    when "a"
        puts "Addition"
        puts "=-"*40
        print "Please enter the first number: "
        num1 = gets.to_i
        print "Please enter the second nuber: "
        num2 = gets.to_i
        system "clear"
        num1 + num2
    when "m"
        puts "Multiplication"
        puts "=-"*40
        print "Please enter the first number: "
        num1 = gets.to_i
        print "Please enter the second nuber: "
        num2 = gets.to_i
        system "clear"
        num1 * num2
    when "s"
        puts "Subtraction"
        puts "=-"*40
        print "Please enter the first number: "
        num1 = gets.to_i
        print "Please enter the second nuber: "
        num2 = gets.to_i
        system "clear"
        num1 - num2
    when "d"
        puts "Division"
        puts "=-"*40
        print "Please enter the first number: "
        num1 = gets.to_i
        print "Please enter the second nuber: "
        num2 = gets.to_i
        system "clear"
        num1 / num2
    else
        puts "Invalid selection. You idiot."
    end
    #add more when clauses
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"


