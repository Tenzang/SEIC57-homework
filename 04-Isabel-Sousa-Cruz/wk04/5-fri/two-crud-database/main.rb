require "sinatra"
require "sinatra/reloader"
require "active_record"
require "pry"

ActiveRecord::Base.establish_connection(
    :adapter => "sqlite3",
    :database => "database.sqlite3"
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Band < ActiveRecord::Base
    has_many :albums, dependent: :destroy
end

class Album < ActiveRecord::Base
    belongs_to :band
end

######

get "/" do
    erb :home
end

# index
get "/albums" do
    @albums = Album.all
    erb :albums_index
end

# new

get "/albums/new" do
    if params[:already_exists]
        @already_exists = true
    end
    if params[:non_existing_band]
        @non_existing_band = true
    end
    erb :albums_new
end

# create

post "/albums" do
    band = Band.where(name: params[:band]).first
    if !band
        redirect to("/albums/new?non_existing_band=true")
    else
        existing_album = Album.where(name: params[:name], band: band).first
        if existing_album
            redirect to("/albums/new?already_exists=true")
        else
            album = Album.new
            album.name = params[:name]
            album.band = band          # gets the band(author) related to the album
            album.image = params[:image]
            album.released_year = params[:released_year]
            album.info = params[:info]
            album.save

            redirect to("/albums/#{album.id}")
        end
    end
end

# show

get "/albums/:id" do
    @album = Album.find params[:id]
    erb :albums_show
end

# edit 

get "/albums/:id/edit" do
    if params[:non_existing_band]
        @non_existing_band = true
    end

    @album = Album.find params[:id]
    erb :albums_edit
end


# update
post "/albums/:id" do
    allBands = Band.all # change this
    author = nil
    for band in allBands do
        if band.name === params[:band]
            author = band
        end
    end
    if !author
        redirect to("/albums/#{album.id}/edit?non_existing_band=true")
    end

    album = Album.find params[:id]
    album.name = params[:name]
    album.band = author
    album.image = params[:image]
    album.released_year = params[:released_year]
    album.info = params[:info]
    album.save

    redirect to("/albums/#{album.id}")
end

# delete

get "/albums/:id/delete" do
    album = Album.find params[:id]
    album.destroy
    redirect to("/albums")
end

#######################################

get "/" do
    erb :home
end

# index
get "/bands" do
    @bands = Band.all
    erb :bands_index
end

# new

get "/bands/new" do
    if params[:already_exists]
        @already_exists = true
    end
    erb :bands_new
end

# create

post "/bands" do
    allBands = Band.all
    for band in allBands do
        if band.name === params[:name]
            redirect to("/bands/new?already_exists=true")
        end
    end

    band = Band.new
    band.name = params[:name]
    band.image = params[:image]
    band.save

    redirect to("/bands/#{band.id}")
end

# show

get "/bands/:id" do
    @band = Band.find params[:id]
    erb :bands_show
end

# edit 

get "/bands/:id/edit" do
    @band = Band.find params[:id]
    erb :bands_edit
end


# update
post "/bands/:id" do
    band = Band.find params[:id]
    band.name = params[:name]
    band.image = params[:image]
    band.albums = params[:albums]
    band.save

    redirect to("/bands/#{band.id}")
end

# delete

get "/bands/:id/delete" do
    band = Band.find params[:id]
    band.destroy
    redirect to("/bands")
end
