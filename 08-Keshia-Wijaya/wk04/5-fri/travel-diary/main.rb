require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)
class City < ActiveRecord::Base 
end

class Country < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# Show all the cities
get '/cities' do
    @cities = City.all
    erb :cities_index
end

# NEW
# Blank form for a new city
get '/cities/new' do
    erb :cities_new
end

# CREATE
# Insert the user's form data into the database
post '/cities' do
    city = City.new
    city.name = params[:name]
    city.note = params[:note]
    city.image = params[:image]
    city.save
    redirect to("/cities/#{ city.id }") # GET show
end

# SHOW
# Show a single city
get '/cities/:id' do
    @city = City.find params[:id]
    erb :cities_show
end

# EDIT
# Pre-filled form for updating a city
get '/cities/:id/edit' do
    @city = City.find params[:id]
    erb :cities_edit
end

# UPDATE
# Update a city with the user's form data
post '/cities/:id' do
    city = City.find params[:id]
    city.name = params[:name]
    city.family = params[:family]
    city.image = params[:image]
    city.save
    redirect to("/cities/#{ params[:id ] }")
end

# DESTROY
# Delete a city from the database
get '/cities/:id/delete' do
    city = City.find params[:id]
    city.destroy
    redirect to('/cities')
end

# Plants ############################################################

# INDEX
get '/countries' do
    @countries = Country.all
    erb :countries_index
end

# NEW
get '/countries/new' do
    erb :countries_new
end

# CREATE
post '/countries' do
    country = Country.new
    country.name = params[:name]
    country.image = params[:image]
    country.save
    redirect to("/countries/#{ country.id }") # GET the show
end

# SHOW
get '/countries/:id' do
    @country = Country.find params[:id]
    erb :countries_show
end

# EDIT
get '/countries/:id/edit' do
    @country = Country.find params[:id]
    erb :countries_edit
end

# UPDATE
post '/countries/:id' do
    country = Country.find params[:id]
    country.name = params[:name]
    country.image = params[:image]
    country.save
    redirect to("/countries/#{ country.id }")
end

# DESTROY
get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy
    redirect to('/countrys')
end