class MagicballController < ApplicationController
    def result
        @array = ['As I see it, yes.', 'Very doubtful. '].sample
    end
end