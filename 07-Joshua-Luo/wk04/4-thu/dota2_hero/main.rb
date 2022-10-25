require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home
end

get '/heros' do
    @heros = sql_query "SELECT * FROM dota2_hero"
    erb :heros
end

get '/heros/new' do
    erb :hero_new
end

post '/heros' do
    sql_query "INSERT INTO dota2_hero (name, image, Primary_Stat, Agility, Agility_Gain, Intelligence, Intelligence_Gain, Strength, Strength_Gain, Health, Health_Regen, Mana, Mana_Regen) VALUES ('#{params[:name]}', '#{params[:image]}', '#{params[:Primary_Stat]}', '#{params[:Agility]}', '#{params[:Agility_Gain]}', '#{params[:Intelligence]}', '#{params[:Intelligence_Gain]}', '#{params[:Strength]}', '#{params[:Strength_Gain]}', '#{params[:Health]}', '#{params[:Health_Regen]}', '#{params[:Mana]}', '#{params[:Mana_Regen]}')"
    redirect to('/heros')
end


get '/heros/:id' do
    hero = sql_query "SELECT * FROM dota2_hero WHERE id = #{ params[:id] }"
    @hero = hero.first
    erb :hero_show
end

get '/heros/:id/edit' do
    hero = sql_query "SELECT * FROM dota2_hero WHERE id = #{ params[:id] }"
    @hero = hero.first
    erb :hero_edit
end

post '/heros/:id' do
    sql_query "UPDATE dota2_hero SET name='#{params[:name]}', image='#{params[:image]}', Primary_Stat='#{params[:Primary_Stat]}', Agility='#{params[:Agility]}', Agility_Gain='#{params[:Agility_Gain]}', Intelligence='#{params[:Intelligence]}', Intelligence_Gain='#{params[:Intelligence_Gain]}', Strength='#{params[:Strength]}', Strength_Gain='#{params[:Strength_Gain]}', Health='#{params[:Health]}', Health_Regen='#{params[:Health_Regen]}', Mana='#{params[:Mana]}', Mana_Regen='#{params[:Mana_Regen]}' WHERE id =#{params[:id]} "
    redirect to("/heros/#{params[:id]}")
end


get '/heros/:id/delete' do
    sql_query "DELETE FROM dota2_hero WHERE id = #{params[:id]}"
    redirect to("/heros")
end      

def sql_query sql
    puts sql
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    result = db.execute sql
end