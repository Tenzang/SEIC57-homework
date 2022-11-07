class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def new
    end

    def create
        # TODO: rewrite this as a single Mountain.create
        mountains = Mountain.new
        mountains.name = params[:name]
        mountains.image = params[:image]
        mountains.height = params[:height]
        mountains.lowestTemp = params[:lowestTemp]
        mountains.location = params[:location]
        mountains.range = params[:range]
        mountains.save
        redirect_to mountain_path(mountains.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end

    def update
        mountains = Mountain.find params[:id]
        mountains.name = params[:name]
        mountains.image = params[:image]
        mountains.height = params[:height]
        mountains.lowestTemp = params[:lowestTemp]
        mountains.location = params[:location]
        mountains.range = params[:range]
        mountains.save
        redirect_to mountain_path(mountains.id)
    end

    def destroy
        mountains = Mountain.find params[:id]
        mountains.destroy
        redirect_to mountains_path
    end
end