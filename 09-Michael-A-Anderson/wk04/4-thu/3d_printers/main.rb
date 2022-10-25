require 'sinatra'
require "sinatra/reloader"
require "sqlite3"

get '/' do
    erb :home
end

get '/3d_printers' do
    @printers = query_db "SELECT * FROM printers3d"
    # require 'pry'
    # binding.pry
    erb :printers
end

get "/3d_printers/new_printer" do
    erb :new_printer
end

post "/3d_printers" do
    query_db "INSERT INTO printers3d (brand,model,print_size,resolution,monoscreen,image) VALUES ('#{params[:brand]}','#{params[:model]}','#{params[:print_size]}','#{params[:resolution]}','#{params[:monoscreen]}','#{params[:image]}')"
    redirect to('/3d_printers')
end

get '/3d_printers/:id' do
    printers = query_db "SELECT * FROM printers3d WHERE id=#{params[:id]}"
    @printer = printers[0]
    erb :show_printer
end

get '/3d_printers/:id/edit_printer' do
    printers = query_db "SELECT * FROM printers3d WHERE id=#{params[:id]}"
    @printer = printers[0]
    erb :edit_printer
end

post '/3d_printers/:id' do
    query_db "UPDATE printers3d SET brand='#{params[:brand]}', model = '#{params[:model]}',print_size = '#{params[:print_size]}', resolution = '#{params[:resolution]}', monoscreen = '#{params[:monoscreen]}',image='#{params[:image]}' WHERE id='#{params[:id]}'"
    redirect to("/3d_printers/#{params[:id]}")
end

get '/3d_printers/:id/delete' do
    query_db "DELETE FROM printers3d WHERE id=#{params[:id]}"
    redirect to("/3d_printers")
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end