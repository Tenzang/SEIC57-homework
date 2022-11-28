class Airline < ActiveRecord::Base
    has_many :incidents
end