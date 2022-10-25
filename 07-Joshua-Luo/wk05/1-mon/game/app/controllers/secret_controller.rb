class SecretController < ApplicationController

    def game
        @nums = (1...10).to_a
    end

    def answer
        @result = "wrong"
        if params[:number].to_i == rand(1...10)
            @result = "right"      
        end
        
    end
    
end