class MountainsController < ApplicationController


#INDEX 
def index
    @mountains = Mountain.all
end

#NEW
def new
end

#SHOW
def show
    @mountain = Mountain.find params[:id]
end

#CREATE
def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.country = params[:country]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
end

#EDIT
def edit
    @mountain = Mountain.find params[:id]
end

#UPDATE
def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.country = params[:country]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
end

#DELETE

def delete 
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
end

end
