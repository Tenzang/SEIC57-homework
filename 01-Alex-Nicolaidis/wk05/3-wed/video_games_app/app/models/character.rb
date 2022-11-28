class Character < ActiveRecord::Base
    belongs_to :game, :optional => true
end