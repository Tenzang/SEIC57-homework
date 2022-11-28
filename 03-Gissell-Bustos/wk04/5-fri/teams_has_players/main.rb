require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

class Team < ActiveRecord::Base
end

class Player < ActiveRecord::Base
end

get '/' do
    erb :home
end

#INDEX
#Show all teams
get '/teams' do
    @teams = Team.all
    erb :teams_index
end

# NEW
# Blank for a new team 
get '/teams/new' do
    erb :teams_new
end

#CREATE
post '/teams' do
    team = Team.new
    team.name = params[:name]
    team.gema = params[:gema]
    team.logo = params[:logo]
    team.save
    redirect to("/teams/#{ team.id }") 
end
#SHOW
#Show a single team
get '/teams/:id' do
    @team = Team.find params[:id]
    erb :teams_show
end

#EDIT
get '/teams/:id/edit' do
    @team = Team.find params[:id]
    erb :teams_edit
end

#UPDATE
post '/teams/:id' do
    team = Team.find params[:id]
    team.name = params[:name]
    team.gema = params[:gema]
    team.logo = params[:logo]
    team.save
    redirect to("/teams/#{params[:id]}")
end


#DELETE
get '/teams/:id/delete' do
    team = Team.find params[:id]
    team.destroy
    redirect to('/teams')                     
end

#################        PLAYERS         ################
# INDEX
get '/players' do
    @players =Player.all
    erb :players_index
end
# NEW
get '/players/new' do
    erb :players_new
end
# CREATE
post '/players' do
    player = Player.new
    player.alias = params[:alias]
    player.status = params[:status]
    player.team_id = params[:team_id]
    player.age = params[:age]
    player.save
    redirect to("/players/#{ player.id }") 
end
#SHOW
get '/players/:id' do
    @player = Player.find params[:id]
    erb :players_show
end

#EDIT
get '/players/:id/edit' do
    @player = Player.find params[:id]
    erb :players_edit
end

#UPDATE
post '/players/:id' do
    player = Player.new
    player.alias = params[:alias]
    player.status = params[:status]
    player.team_id = params[:team_id]
    player.age = params[:age]
    player.save
    redirect to("/players/#{params[:id]}")
end
#DELETE
get '/players/:id/delete' do
    player = Players.find params[:id]
    player.destroy
    redirect to('/players')                     
end