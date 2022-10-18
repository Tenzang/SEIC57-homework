print "What is the total amount of your loan: "
P = gets.to_i
print "What is your yearly interest rate: "
I = gets.to_f
print "How many months left on your loan: "
N = gets.to_i
i = (I/1200).to_f
puts i
monthly_payment = (P*(i*(1+i)**N))/((1+i)**N-1)
puts monthly_payment
# puts "your monthly repayment is #{monthly_payment}"