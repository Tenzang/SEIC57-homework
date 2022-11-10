class RockPaperScissorsController < ApplicationController
    @@possible_images_src = {
        :rock => "/assets/rock.png",
        :paper => "/assets/paper.png",
        :scissors => "/assets/scissors.png"
    }

    def choose
        @image_options = @@possible_images_src
    end

    def result
        possible_choices = ["rock", "paper", "scissors"]

        user_choice = params[:chosen]
        computer_choice = possible_choices.sample

        @user_choice_img = @@possible_images_src[user_choice.to_sym]
        @computer_choice_img = @@possible_images_src[computer_choice.to_sym]

        result = compareChoices(computer_choice, user_choice, possible_choices)

        @message_to_print =
            if result == "tie"
                "It's a tie"
            elsif result == "lose"
                "#{computer_choice} beats #{user_choice}. You lose!"
            else
                "#{user_choice} beats #{computer_choice}. You won!"
            end
    end
end

def compareChoices(computer_choice, player_choice, game_options)
    if computer_choice == player_choice
        "tie"
    else 
        if ((computer_choice == game_options[0] && player_choice == game_options[2]) ||
            (computer_choice == game_options[1] && player_choice == game_options[0]) ||
            (computer_choice == game_options[2] && player_choice == game_options[1])) 
            "lose"
        else
            "win"
        end
    end
end