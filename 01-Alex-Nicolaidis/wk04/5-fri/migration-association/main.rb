require "sinatra"
require "sinatra/reloader"
require "active_record"
require "pry"
require "sqlite3"

#Establisha a connection to the database with the active_record
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#optional bonus - show the SQL commands used when information is added edited or deleted
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models: a class that is backed by a database table
class Game < ActiveRecord::Base
end

class Character < ActiveRecord::Base
end