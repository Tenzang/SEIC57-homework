class MagicController < ApplicationController

    def game
        
    end

    def answer
        possible_answers = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes definitely.",
            "You may rely on it",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good",
            "Very doubtful."
        ]

        @answer = possible_answers[rand(0...possible_answers.length-1)]

    end
    
end