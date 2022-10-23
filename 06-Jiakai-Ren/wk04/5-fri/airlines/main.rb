require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

class Airline < ActiveRecord::Base
    has_many :incidents, dependent: :destroy
end

class Incident < ActiveRecord::Base
    belongs_to :airline
end

# HOME
get '/' do
    erb :home
end

# INDEX
get '/airlines' do
    @airlines = Airline.all
    erb :airlines_index
end

# NEW
get '/airlines/new' do
    erb :airlines_new
end

# CREATE
post '/airlines' do
    airline = Airline.new
    airline.name = params[:name]
    airline.code = params[:code]
    airline.country = params[:country]
    airline.logo = params[:logo]
    airline.fleet_size = params[:fleet_size]
    airline.incident_count = params[:incident_count]
    airline.save
    redirect to("/airlines/#{ airline.id }")
end

# SHOW
get '/airlines/:id' do
    @airline = Airline.find params[:id]
    erb :airlines_show
end

# EDIT
get '/airlines/:id/edit' do
    @airline = Airline.find params[:id]
    erb :airlines_edit
end

# UPDATE
post '/airlines/:id' do
    airline = Airline.find params[:id]
    airline.name = params[:name]
    airline.code = params[:code]
    airline.country = params[:country]
    airline.logo = params[:logo]
    airline.fleet_size = params[:fleet_size]
    airline.incident_count = params[:incident_count]
    airline.save
    redirect to("/airlines/#{ airline.id }")
end

# DESTROY
get '/airlines/:id/delete' do
    airline = Airline.find params[:id]
    airline.destroy
    redirect to('/airlines')
end

# INCIDENTS ###################################

# INDEX
get '/incidents' do
    @incidents = Incident.all
    erb :incidents_index
end

# NEW
get '/incidents/new' do
    erb :incidents_new
end

# CREATE
post '/incidents' do
    incident = Incident.new
    incident.code = params[:code]
    incident.flight_number = params[:flight_number]
    incident.death = params[:death]
    incident.injury = params[:injury]
    incident.survival = params[:survival]
    incident.image = params[:image]
    incident.description = params[:description]
    incident.save
    redirect to("/incidents/#{incident.id}")
end

# SHOW
get '/incidents/:id' do
    @incident = Incident.find params[:id]
    erb :incidents_show
end

# EDIT
get '/incidents/:id/edit' do
    @incident = Incident.find params[:id]
    erb :incidents_edit
end

# UPDATE
post '/incidents/:id' do
    incident = Incident.find params[:id]
    incident.code = params[:code]
    incident.flight_number = params[:flight_number]
    incident.death = params[:death]
    incident.injury = params[:injury]
    incident.survival = params[:survival]
    incident.image = params[:image]
    incident.description = params[:description]
    incident.save
    redirect to("/incidents/#{ incident.id }")
end

# DESTROY
get '/incidents/:id/delete' do
    incident = Incident.find params[:id]
    incident.destroy
    redirect to('/incidents')
end