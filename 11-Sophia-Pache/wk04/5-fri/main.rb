require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Country < ActiveRecord::Base
    has_many :cities, dependent: :destroy
end
class City < ActiveRecord::Base
    belongs_to :country
end


get '/' do
    erb :home
end

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
    country.climate = params[:climate]
    country.area = params[:area]
    country.save
    redirect to ("/countries/#{ country.id }")
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
    country.climate = params[:climate]
    country.area = params[:area]
    country.save
    redirect to ("/countries/#{ country.id }")
end

# DESTROY
get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy 
    redirect to ('/countries')
end


###############################################################
# INDEX 
get '/cities' do
    @cities = City.all
    erb :cities_index
end

# NEW
get '/cities/new' do
    erb :cities_new
end

# CREATE
post '/cities' do
    city = City.new
    city.name = params[:name]
    city.image = params[:image]
    city.landmark = params[:landmark]
    city.cost = params[:cost]
    city.countryid = params[:countryid]
    city.save
    redirect to ("/cities/#{ city.id }")
end

# SHOW 
get '/cities/:id' do
    @city = City.find params[:id]
    erb :cities_show
end

# EDIT
get '/cities/:id/edit' do
    @city = City.find params[:id]
    erb :cities_edit
end

# UPDATE 
post '/cities/:id' do
    city = City.find params[:id]
    city.name = params[:name]
    city.image = params[:image]
    city.landmark = params[:landmark]
    city.cost = params[:cost]
    city.countryid = params[:countryid]
    city.save
    redirect to ("/cities/#{ city.id }")
end

# DESTROY
get '/cities/:id/delete' do
    city = City.find params[:id]
    city.destroy 
    redirect to ('/cities')
end

