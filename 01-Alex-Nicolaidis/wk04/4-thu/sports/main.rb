require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "pry"

get '/' do
    erb :home
end

#INDEX
#Show a page with a link to all of the sports based on the name of the sports
# /sports

get '/sports' do
    @sports = query_db "SELECT * FROM sports"
    erb :sports_index
end


#NEW
#Have a blank form that allows a user to add the information about a sport 
# /sports/new

get '/sports/new' do
    erb :sports_new
end

#CREATE
#Use the information provided in the form to add the information about the sport to the database
# /sports

post '/sports' do
    query_db "INSERT INTO sports (name, goat, image) VALUES ('#{params["name"]}', '#{params["goat"]}', '#{params["image"]}')"
    redirect to('/sports')
end

#SHOW
#Show the information about a single sport
# /sports/:id

get '/sports/:id' do
    sports = query_db "SELECT * FROM sports WHERE id=#{params["id"]}"
    @sport = sports.first
    erb :sports_show
end

#EDIT
#Form with current values from the data base that are editable
# /sports/:id/edit

get '/sports/:id/edit' do
    sports = query_db "SELECT * FROM sports WHERE id=#{params['id']}"
    @sport = sports.first
    erb :sports_edit
end

#UPDATE 
#Edited values by the user to be added to the database
# /sports/:id 

post '/sports/:id' do
    query_db "UPDATE sports SET name='#{params[:name]}', goat='#{params[:goat]}', image='#{params[:image]}' WHERE id=#{params['id']}"
    redirect to("/sports/#{params[:id]}")
end


#DELETE
#Delete all the information about a specific sport
# /sports/:id/delete

get '/sports/:id/delete' do
    query_db "DELETE FROM sports WHERE id=#{params[:id]}"
    redirect to('/sports')
end


def query_db sql_statement
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end

#sql statements
# https://www.sqlitetutorial.net/sqlite-cheat-sheet/