class SecretNumberController < ApplicationController
    def guess
    end

    def answer
        numbers = (1..10).to_a
        @computer_number = numbers.sample
        @guess = params[:guess]

        

        @message_to_print = 
        if @guess == @computer_number
            "You are a good guesser. What are you waiting to play the lottery?"
        else
            "Think harder next time!"
        end

    end
end