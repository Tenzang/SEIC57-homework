class RockpaperscissorsController < ApplicationController
    def select
    end
    
    def result
        @computer_pick = ['Rock', 'Paper', 'Scissors'].sample
        @user_pick = params[:choice]
        if @computer_pick == @user_pick
            @message = "Draw"
        else
            @message = case @user_pick
            when 'Rock'
                @computer_pick == "Paper" ? "You lost" : "You won"
            when 'Paper'
                @computer_pick == "Scissors" ? "You lost" : "You won"
            when 'Scissors'
                @computer_pick == "Rock" ? "You lost" : "You won"
            end
        end
    end
end