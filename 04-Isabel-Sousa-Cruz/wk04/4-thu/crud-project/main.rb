require "sinatra"
require "sinatra/reloader"
require "sqlite3"

def db_query(query)
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute(query)
    db.close
    results
end 

get "/" do
    erb :home
end

get "/notes" do
    @notes = db_query("SELECT * FROM notes")
    erb :notes_index
end

get "/notes/new" do
    erb :notes_new
end

get "/notes/:id" do
    notes = db_query("SELECT * FROM notes WHERE id=#{ params[:id] }")
    @note = notes.first
    erb :notes_show
end

post "/notes" do
    db_query("INSERT INTO notes (title, content, creation_date) VALUES ('#{params[:title]}', '#{params[:content]}', date('now'))")
    redirect to("/notes")
end

get "/notes/:id/edit" do
    notes = db_query("SELECT * FROM notes WHERE id=#{ params[:id] }")
    @note = notes.first
    erb :notes_edit
end

post "/notes/:id" do
    db_query("UPDATE notes SET title='#{params[:title]}', content='#{params[:content]}' WHERE id=#{params[:id]}")
    redirect to("/notes/#{params[:id]}")
end

get "/notes/:id/delete" do
    db_query("DELETE FROM notes WHERE id=#{params[:id]}")
    redirect to("/notes")
end