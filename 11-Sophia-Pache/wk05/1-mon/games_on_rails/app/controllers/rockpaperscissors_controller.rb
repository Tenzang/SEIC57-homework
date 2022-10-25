class RockpaperscissorsController < ApplicationController
    def result
        array = ['Rock', 'Paper', 'Scissor']
        server = array.sample
        throw = params[:throw]
        if throw == server
            @winmessage = "User wins! Server chose #{ server }."
        elsif throw == 'Paper' && server == 'Scissor'
            @winmessage = "Server wins! Server chose #{ server }."
        elsif throw == 'Paper' && server == 'Rock'
            @winmessage = "User wins! Server chose #{ server }."
        elsif throw == 'Scissor' && server == 'Rock'
            @winmessage = "Server wins! Server chose #{ server }."
        elsif throw == 'Scissor' && server == 'Paper'
            @winmessage = "User wins! Server chose #{ server }."
        elsif throw == 'Rock' && server == 'Paper'
            @winmessage = "Server wins! Server chose #{ server }."
        elsif throw == 'Rock' && server == 'Scissors'
            @winmessage = "User wins! Server chose #{ server }."
        else
            @winmessage = "User wins! Server chose #{ server }."
        end
    end
end