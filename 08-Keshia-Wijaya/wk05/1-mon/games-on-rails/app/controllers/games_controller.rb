class GamesController < ApplicationController
    def games
        render :games
    end
    def magic8
        render :magic8
    end

    def secret_number
        render :secret_number
    end

    def rock_paper_scissors
        rebder :rock_paper_scissors
    end
end

