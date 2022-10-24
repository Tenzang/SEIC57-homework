class SecretController < ApplicationController
    def guess
    end

    def reveal
        random_number = rand(1..10)
        number = params[:number].to_i
        @message = "Incorect the secret number was #{random_number}"
        if random_number == number
            @message = "Good guess #{random_number} was the secret number."
        end
    end
end