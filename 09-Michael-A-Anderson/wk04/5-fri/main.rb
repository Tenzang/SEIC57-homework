require "sinatra"
require "sinatra/reloader"
require "active_record"

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Brewery < ActiveRecord::Base
end

class Bourbon < ActiveRecord::Base
end

# BREWERIES ###########################################
get "/" do
    erb :home
end
#INDEX 
get '/breweries' do
    @breweries = Brewery.all
    erb :brewery_index
end
#NEW
get "/breweries/new" do
    erb :brewery_new
end
#CREATE
post "/breweries" do
    brewery= Brewery.new
    brewery.name = params[:name]
    brewery.country = params[:country]
    brewery.image = params[:image]
    brewery.save
    redirect to("/breweries/#{brewery.id}")
end
#SHOW
get "/breweries/:id" do
    @brewery = Brewery.find params[:id]
    erb :brewery_show
end
#EDIT
get "/breweries/:id/edit" do
    @brewery = Brewery.find params[:id]
    erb :brewery_edit
end

#UPDATE
post "/breweries/:id" do 
    brewery = Brewery.find params[:id]
    brewery.name = params[:name]
    brewery.country = params[:country]
    brewery.image = params[:image]
    brewery.save
    redirect to("/breweries/#{brewery.id}")
end
#DELETE
get "/breweries/:id/delete" do
    brewery = Brewery.find params[:id]
    brewery.destroy
    redirect to('/breweries')
end

#BOURBONS ############################################
#INDEX 
get '/bourbons' do
    @bourbons = Bourbon.all
    erb :bourbon_index
end
#NEW
get "/bourbons/new" do
    erb :bourbon_new
end
#CREATE
post "/bourbons" do
    bourbon= Bourbon.new
    bourbon.name = params[:name]
    bourbon.alcohol_content = params[:alcohol_content]
    bourbon.image = params[:image]
    bourbon.save
    redirect to("/bourbons/#{bourbon.id}")
end
#SHOW
get "/bourbons/:id" do
    @bourbon = Bourbon.find params[:id]
    erb :bourbon_show
end
#EDIT
get "/bourbons/:id/edit" do
    @bourbon = Bourbon.find params[:id]
    erb :bourbon_edit
end
#UPDATE

post '/bourbons/:id' do 
    bourbon = Bourbon.find params[:id]
    bourbon.name = params[:name]
    bourbon.alcohol_content = params[:alcohol_content]
    bourbon.image = params[:image]
    bourbon.save
    redirect to("/bourbons/#{bourbon.id}")
end
#DELETE
get "/bourbons/:id/delete" do
    bourbon = Bourbon.find params[:id]
    bourbon.destroy
    redirect to('/bourbons')
end