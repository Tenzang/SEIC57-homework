require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all the butterflies. words with / is a params
# Index page itu kaya home. tapi yang lebih specific. ex : facebook = home. facebook/tim = index
get '/fruits' do
    @fruits = query_db 'SELECT * FROM fruits' #select everything from table butterflies from sql
    #yang ada quotes bukan string. memang syntax nya sql
    #@butterlies itu instance variable. bisa dipanggil dimna aja
    erb :fruits_index #untuk manngil file buuterlies index
end

# NEW
# Blank form for a new butterfly
get '/fruits/new' do
    erb :fruits_new
end

# CREATE
# Insert the user's form data into the database
post '/fruits' do
    query_db "INSERT INTO fruits (name, family, image) VALUES ('#{ params[:name] }', '#{params[:family] }', '#{ params[:image] }')"
    redirect to('/fruits')
end

# SHOW
# Show a single butterfly
get '/fruits/:id' do
    fruits = query_db "SELECT * FROM fruits WHERE id=#{ params[:id] }"
    @fruit = fruits.first # Extract the butterfly from the array of results
    erb :fruits_show
end

# EDIT
# Pre-filled form for updating a butterfly
get '/fruits/:id/edit' do
    fruits = query_db "SELECT * FROM fruits WHERE id=#{ params[:id] }"
    @fruit = fruits.first # Extract the butterfly from the array of results
    erb :fruits_edit
end

# UPDATE
# Update a butterfly with the user's form data
post '/fruits/:id' do
    query_db "UPDATE fruits SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/fruits/#{ params[:id] }")
end

# DESTROY
# Delete a butterfly from the database
get '/fruits/:id/delete' do
    query_db "DELETE FROM fruits WHERE id=#{ params[:id] }"
    redirect to('/fruits')
end

  def query_db(sql_statement)
    puts sql_statement # Optional but nice to have for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicite return
end