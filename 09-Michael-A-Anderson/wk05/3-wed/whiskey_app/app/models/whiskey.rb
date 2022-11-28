class Whiskey < ActiveRecord::Base
    belongs_to :brewery, :optional => true
end
