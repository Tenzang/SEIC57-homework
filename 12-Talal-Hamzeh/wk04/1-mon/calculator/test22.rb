def show_menu3
    puts "[s]- Start  "
    puts "[q] - Quit  "
print " Press s to start "
end
show_menu3
menu_choice3= gets.chomp.downcase

until menu_choice3 == 'q4'
    case menu_choice3
    when "s"
       
        puts " Enter the Value of your Annual interest rate : "
        interest_value= gets.chomp.downcase
        puts " Enter the value of your loan Term in Years : "
        years_value= gets.chomp.downcase
        monthly_interest_rate = ((interest_value).to_f / 12)
        term_months = ((years_value).to_i* 12)
    
        puts ((((monthly_interest_rate).to_f * (1 + (monthly_interest_rate).to_f)) ** term_months) / (((1 + (monthly_interest_rate).to_f ** term_months) - 1)))
    else 
        puts "Invalid selection. You idiot."

    end 
end 