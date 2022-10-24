require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/items' do
    @items = query_db 'SELECT * FROM items'
    erb :items_index
end

def query_db(sql_statement)
    puts sql_statement 
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicite return
end
get '/items/:id' do
    items = query_db "SELECT * FROM items WHERE id=#{ params[:id] }"
    @item = items.first 
    erb :items_show
end

post '/items/:id/edit' do 
    items = query_db "SELECT * FROM items WHERE id=#{ params[:id] }"
    @item = items.first 
    erb :items_edit
end 