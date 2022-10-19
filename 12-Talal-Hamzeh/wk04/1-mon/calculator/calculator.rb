

def show_mode
    puts "=-" * 40 
    puts " Calculator".center(70) # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line


    puts "[ba] - Basic Calculator "
    puts "[ad] - Advanced Calculator "
    puts "[mt] - Mortgage Calculator"
    puts " [q] - Quit  "

   print " choose calculator mode   : "
end
show_mode
menu_mode=gets.chomp.downcase

# basic Calculator 

def show_menu1 
    puts "  Choose between : 
    [a] - Addition ( + )
    [s] - Substraction ( - )
    [m] - Multiplication ( * )
    [d] - Division ( / )"
    puts "[q2] - Quit"
    print " enter your Choice : "
end 


# Advanced Calculator 
def show_menu2
    puts " choose between : 
    [e] - Exponent
    [r] - Square Roots 
    "
    puts "
    [q3] - Quit"

    print " enter your Choice : "

end 




until menu_mode == 'q'
    case menu_mode
    when 'ba'
        puts "you  have chosen ba"
        show_menu1
        menu_choice1 = gets.chomp.downcase

    until menu_choice1=='q2'
    case menu_choice1
    when 'ba'
        puts "you  have chosen ba"
        show_menu1
        menu_choice1 = gets.chomp.downcase
    when 'a'
        puts "You chose Addition ( + ) "
        print "Enter first Number : "
       first_number=gets.chomp.to_i
       print  "Enter second Number : " 
        second_number=gets.chomp.to_i
        print "    The result is #{(first_number.to_i + second_number.to_i )} " 
    when 's'
        puts "You chose Substraction ( - )"
        print "Enter first Number : "
       first_number=gets.chomp.to_i
       print  "Enter second Number : " 
        second_number=gets.chomp.to_i
        print "    The result is #{(first_number.to_i - second_number.to_i )} " 
 
    when 'm'
        puts "You chose Multiplication ( * )"
        print "Enter first Number : "
       first_number=gets.chomp.to_i
       print  "Enter second Number : " 
        second_number=gets.chomp.to_i
        print "     The result is #{(first_number.to_i * second_number.to_i )} " 
 
    when 'd'
        puts "You chose Division ( / )"
        print "Enter first Number : "
       first_number=gets.chomp.to_i
       print  "Enter second Number : " 
        second_number=gets.chomp.to_i
        print "  The result is #{(first_number.to_i / second_number.to_i )} " 
    
     when 'q2'
        show_mode
        menu_mode = gets.chomp.downcase
 
 
    else
        puts "Invalid selection. You idiot."
    end
    show_menu1
        menu_choice1 = gets.chomp.downcase
   
 end
        
       
        
        
    when 'ad'
        show_menu2
        menu_choice2 = gets.chomp.downcase
        
        
            until menu_choice2=='q3'
            case menu_choice2
            when 'e'
                puts "You chose exponent "
                print "Enter the number to apply an exponent to: : "
                    first_number=gets.chomp.to_i
                print  "Enter exponent number: : " 
                    second_number=gets.chomp.to_i
                print "     The result is #{(first_number.to_i ** second_number.to_i )} " 

            when 'r'
                puts "You chose exponent "
                print "Enter the number to square root:  : "
                        first_number=gets.chomp.to_i
                print "     The result is #{(Math.sqrt(first_number.to_i))} " 
            else
                puts "Invalid selection. You idiot."
            end
                puts "
                "
                show_menu2
                menu_choice2=gets.chomp.downcase
    end
        
    else
        puts "Invalid selection. You idiot."
    end
     show_mode
     menu_mode = gets.chomp.downcase
end 

#Mortgage Calculator
