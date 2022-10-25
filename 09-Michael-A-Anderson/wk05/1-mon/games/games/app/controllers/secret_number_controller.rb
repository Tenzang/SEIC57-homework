class SecretNumberController < ApplicationController
    def answer
        @comp = (1..10).to_a.sample
        @player_guess = params[:guess].to_i
        if @comp == @player_guess then
            @message = "Well done, that is correct"
        else
            @message = "Too bad, the number was #{@comp}"
        end
    end
    def guess
    end
end