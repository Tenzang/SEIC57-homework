def calculate_mortgage(payments_number, interest_rate, loan_amount)
    rate = (interest_rate.to_f / 12) / 100
    first_calc = rate * ((1 + rate) ** payments_number)
    second_calc = ((1 + rate) ** payments_number) - 1
    third_calc = first_calc / second_calc
    return (loan_amount * third_calc).round(2)
end

print calculate_mortgage(12, 5, 80000)