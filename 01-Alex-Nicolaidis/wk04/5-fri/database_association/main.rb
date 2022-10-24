require "sqlite3"
require "sinatra"
require "sinatra/reloader"
require "active_record"
require "pry"

#Establisha a connection to the database with the active_record
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#optional bonus - show the SQL commands used when information is added edited or deleted
ActiveRecord::Base.logger = Logger.new(STDERR)

#Models: a class that is backed by a database table
class Game < ActiveRecord::Base
    has_many :characters
end

class Character < ActiveRecord::Base
    belongs_to :game
end


#Home page for site 
get '/' do
    erb :home
end


#GAMES

#INDEX 
get '/games' do
    @games = Game.all
    erb :games_index
end

#NEW game form
get '/games/new' do
    erb :games_new
end

#SHOW game page

get '/games/:id' do
    @game = Game.find params[:id]
    erb :games_show
end

#CREATE game
post '/games' do
    game = Game.new
    game.name = params[:name]
    game.developer = params[:developer]
    game.release = params[:release]
    game.information = params[:information]
    game.image = params[:image]
    game.save
    redirect to("/games/#{game.id}")
end

#EDIT
get '/games/:id/edit' do 
    @game = Game.find params[:id]
    erb :games_edit
end

#UPDATE 
post '/games/:id' do
    game = Game.find params[:id]
    game.name = params[:name]
    game.developer = params[:developer]
    game.release = params[:release]
    game.information = params[:information]
    game.image = params[:image]
    game.save
    redirect to("/games/#{params[:id]}")
end

#DELETE
get '/games/:id/delete' do
    game = Game.find params[:id]
    game.destroy
    redirect to('/games')
end




#CHARACTERS

#INDEX
get '/characters' do
    @characters = Character.all
    erb :characters_index
end


#NEW character
get '/characters/new' do
    erb :characters_new
end

#SHOW characters page
get '/characters/:id' do
    @character = Character.find params[:id]
    erb :characters_show
end

#CREATE character
post '/characters' do
    character = Character.new
    character.name = params[:name]
    character.game = params[:game]
    character.category = params[:category]
    character.ultimate = params[:ultimate]
    character.image = params[:image]
    character.save
    redirect to("/characters/#{ character.id }")
end

#EDIT 
get '/characters/:id/edit' do 
    @character = Character.find params[:id]
    erb :characters_edit
end

#UPDATE 
post '/characters/:id' do
    character = Character.find params[:id]
    character.name = params[:name]
    character.game = params[:game]
    character.category = params[:category]
    character.ultimate = params[:ultimate]
    character.image = params[:image]
    character.save
    redirect to("/characters/#{params[:id]}")
end

#DELETE 
get '/characters/:id/delete' do
    character = Character.find params[:id]
    character.destroy
    redirect to('/characters')
end









