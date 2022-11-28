class Incident < ActiveRecord::Base
    belongs_to :airline, :optional => true
end