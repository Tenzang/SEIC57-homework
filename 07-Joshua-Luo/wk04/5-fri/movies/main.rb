require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
    
end

class Movie < ActiveRecord::Base
    
end



get '/' do 
    erb :home
end

get '/directors' do
    @directors = Director.all
    erb :directors
end

get '/directors/new' do
    erb :director_new
end

post '/directors' do
    director = Director.new
    director.name = params[:name]
    director.image = params[:image]
    director.save
    redirect to('/directors')
end


get '/directors/:id' do
    @director = Director.find params[:id]  
    erb :director_show
end

get '/directors/:id/edit' do
    @director = Director.find params[:id]
    
    erb :director_edit
end

post '/directors/:id' do
    director = Director.find params[:id]
    director.name = params[:name]
    director.image = params[:image]
    director.save
    redirect to("/directors/#{director.id_d}")
end


get '/directors/:id_d/delete' do
    director = Director.find_by(id_d: "#{params[:id_d]}")
    director.destroy
    redirect to("/directors")
end      


get '/movies' do
    @movies = Movie.all
    erb :movies
end

get '/movies/new' do
    @directors = Director.all
    erb :movie_new
end

post '/movies' do
    director = Director.find_by(name: "#{params[:d_name]}")
    movie = Movie.new
    movie.name = params[:name]
    movie.image = params[:image]
    movie.id_d = director.id_d
    movie.save
    redirect to('/movies')
end


get '/movies/:id' do
    @movie = Movie.find params[:id]
    @director = Director.find_by(id_d: "#{@movie.id_d}") 
    erb :movie_show
end

get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    @director = Director.find_by(id_d: "#{@movie.id_d}")
    @directors = Director.all
    erb :movie_edit
end

post '/movies/:id' do
    director = Director.find_by(name: "#{params[:d_name]}")
    movie = Movie.find params[:id]
    movie.name = params[:name]
    movie.image = params[:image]
    movie.id_d = director.id_d
    movie.save
    redirect to("/movies/#{movie.id_m}")
end


get '/movies/:id/delete' do
    movie = Movie.find_by(id_m: "#{params[:id]}")
    movie.destroy
    redirect to("/movies")
end      

