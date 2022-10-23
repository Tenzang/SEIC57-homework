require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# HOME
get '/' do
    erb :home
end

# INDEX
get '/trains' do
    @trains = query_db 'SELECT * FROM trains'
    erb :trains_index
end

# NEW
get '/trains/new' do
    erb :trains_new
end

# CREATE
post '/trains' do
    query_db "INSERT INTO trains (name, lines, review, image) VALUES ('#{ params[:name] }', '#{ params[:lines] }', '#{ params[:review] }', '#{ params[:image] }')"
    redirect to('/trains')
end

# SHOW
get '/trains/:id' do
    trains = query_db "SELECT * FROM trains WHERE id=#{ params[:id] }"
    @train = trains.first
    @lines = @train["lines"].split(', ')
    erb :trains_show
end

# EDIT
get '/trains/:id/edit' do
    trains = query_db "SELECT * FROM trains WHERE id=#{ params[:id] }"
    @train = trains.first
    erb :trains_edit
end

# UPDATE
post '/trains/:id' do
    query_db "UPDATE trains SET name='#{ params[:name] }', lines='#{ params[:lines] }', review='#{ params[:review] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/trains/#{ params[:id] }")
end

# DELETE
get '/trains/:id/delete' do
    query_db "DELETE FROM trains WHERE id=#{ params[:id] }"
    redirect to('/trains')
end

def query_db (sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end