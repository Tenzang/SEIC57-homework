class RockController < ApplicationController
    def choice
    end
    def result
        value = params[:throw_id]
        random_choice = ['rock','paper','scissors'].sample

        if value == random_choice
            @game_result = "Tie both chose #{random_choice}"
        elsif (value == 'rock' && random_choice == 'paper') || (value == 'paper' && random_choice == 'scissors')|| (value == 'scissors' && random_choice == 'rock')
            @game_result = "You lose you chose #{value} and they chose #{random_choice}"
        else
            @game_result = "You win you chose #{value} and they chose #{random_choice}"
        end
    end 
end