class Brewery < ActiveRecord::Base
    has_many :whiskeys
end