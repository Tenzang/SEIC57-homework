class SecretnumberController < ApplicationController
    def result
        answer = rand(1..10)
        choice = params[:choice].to_i
        if choice == answer
            @message = 'Correct. You are a genius!'
        else
            @message = 'Try again.'
        end
    end
end