class RockController < ApplicationController

    def game
        @options = ['rock', 'paper', 'scissors']
    end

    def answer
        
        @answer=['rock', 'paper', 'scissors'].sample
        choice = params[:throw]
        @result = "you lost"
        case @answer
        when "rock"
            if choice=="rock"
                @result = "draw"
            elseif choice=='paper'
                @result = "you win"
            end
        when "paper"
            if choice=="paper"
                @result = "draw"
            elseif choice=='scissors'
                @result = "you win"
            end
        when "scissors"
            if choice=="scissors"
                @result = "draw"
            elseif choice=='rock'
                @result = "you win"
            end
        end
        @result
    end
    
end