class PagesController < ApplicationController
    def home
    end

    def fortune
    end

    def fortuned
        @fortune = [
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
        @pick = @fortune[rand(16)]
    end


end