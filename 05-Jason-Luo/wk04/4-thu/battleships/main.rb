require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all battleships
get '/battleships' do
    @battleships = query_db 'SELECT * FROM battleships'
    erb :battleships_index
end

# NEW 
# Blank form for new battleship
get '/battleships/new' do
    erb :battleships_new
end

# CREATE
# Insert user's form data into database
post '/battleships' do
    query_db "INSERT INTO battleships (name, commissioneddate, maincaliber, torpedos, image) VALUES ('#{ params[:name] }', '#{ params[:commissioneddate] }', '#{ params[:maincaliber] }', '#{ params[:torpedos] }', '#{ params[:image] }')"
    redirect to('/battleships')
end

# SHOW
# Show a single battleship
get '/battleships/:id' do
    battleships = query_db " SELECT * FROM battleships WHERE id=#{ params[:id] }"
    @battleship = battleships.first # Extract battleship from results array
    erb :battleships_show
end

# EDIT
# Form that is pre-filled for battleship update details
get '/battleships/:id/edit' do
    battleships = query_db "SELECT * FROM battleships WHERE id=#{ params[:id] }"
    @battleship = battleships.first # Extract battleship from results array
    erb :battleships_edit
end

# UPDATE
# Update battleship data with user's form data into database
post '/battleships/:id' do
    query_db "UPDATE battleships SET name='#{ params[:name] }', commissioneddate='#{ params[:commissioneddate] }', maincaliber='#{ params[:maincaliber] }', torpedos='#{ params[:torpedos] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/battleships/#{ params[:id] }")
end

# DESTROY
# Delete battleship record from database
get '/battleships/:id/delete' do
    query_db "DELETE FROM battleships WHERE id=#{ params[:id] }"
    redirect to('/battleships')
end

def query_db(sql_statement)
    puts sql_statement #Good for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results #implicit return
end
    