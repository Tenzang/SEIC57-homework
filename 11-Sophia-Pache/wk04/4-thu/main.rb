require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end


get '/horses' do
    # require 'pry'
    # binding.pry
    @horses = query_db 'SELECT * FROM horses'
    erb :horses_index
end

get '/horses/new' do
    erb :horses_new
end

get '/horses' do
    query_db "INSERT INTO horses (name, breed, age, image) VALUES ('#{ params[:name] }','#{ params[:breed] }','#{ params[:age] }','#{ params[:image] }')"
    redirect to ('/horses')
end

get '/horses/:id' do
    horses = query_db "SELECT * FROM horses WHERE id=#{ params[:id] }"
    @horse = horses.first
    erb :horses_show
end

get '/horses/:id/edit' do
    horses = query_db "SELECT * FROM horses WHERE id=#{ params[:id] }"
    @horse = horses.first
    erb :horses_edit
end

post '/horses/:id' do
    query_db "UPDATE horses SET name='#{ params[:name] }', breed='#{ params[:breed] }', age='#{ params[:age] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/horses/#{ params[:id] }")
end

get '/horses/:id/delete' do
    query_db "DELETE FROM horses WHERE id=#{ params[:id] }"
    redirect to('/horses')
end

def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end