class SecretnumberController < ApplicationController
    def select
    end
    
    def play
        @upper_limit = params[:limit]
        @num_array = ("0".."#{ @upper_limit }").to_a
        $answer = @num_array.sample
    end

    def result
        @choice = params[:choice]
        $answer == @choice ? @message = "right" : @message = "wrong"
    end
end