require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

class Scandal < ActiveRecord::Base
end
class Predator < ActiveRecord::Base
end

get '/' do
    erb :home
end

#1 INDEX

get '/diagram' do
    @scandals = Scandal.all
    erb :scandals_index
end



#2 NEW

get '/diagram/new' do
    erb :scandals_new
end

#3 CREATE 
post '/diagram' do
    scandal = Scandal.new
    scandal.name = params[:name]
    scandal.paragraph = params[:paragraph]
    scandal.image = params[:image]
    scandal.save
    redirect to("/diagram/#{ scandal.id }") # GET show
end
#4 SHOW 

get '/diagram/:id' do
    @scandal = Scandal.find params[:id]
    erb :scandals_show
end
# EDIT
# Pre-filled form for updating a scandal
get '/diagram/:id/edit' do
    @scandal = Scandal.find params[:id]
    erb :scandals_edit
end

# UPDATE
# Update a scandal with the user's form data
post '/diagram/:id' do
    scandal = Scandal.find params[:id]
    scandal.name = params[:name]
    scandal.paragraph = params[:paragraph]
    scandal.image = params[:image]
    scandal.save
    redirect to("/diagram/#{ params[:id ] }")
end

# DESTROY
# Delete a scandal from the database
get '/diagram/:id/delete' do
    scandal = Scandal.find params[:id]
    scandal.destroy
    redirect to('/diagram')
end

###############################################
# Predators 

# INDEX
get '/predators' do
    @predator = Predator.all
    erb :predators_index
end

# NEW
get '/predators/new' do
    erb :predators_new
end

# CREATE
post '/predators' do
    predator = Predator.new
    predator.name = params[:name]
    predator.paragraph = params[:paragraph]
    predator.image = params[:image]
    predator.save
    redirect to("/predators/#{ predator.id }") # GET the show
end

# SHOW
get '/predators/:id' do
    @predator = Predator.find params[:id]
    erb :predators_show
end

# EDIT
get '/predators/:id/edit' do
    @predator = Predator.find params[:id]
    erb :predators_edit
end

# UPDATE
post '/predators/:id' do
    predator = Predator.find params[:id]
    predator.name = params[:name]
    predator.image = params[:image]
    predator.save
    redirect to("/predators/#{ predator.id }")
end

# DESTROY
get '/predators/:id/delete' do
    predator = Predator.find params[:id]
    predator.destroy
    redirect to('/predators')
end