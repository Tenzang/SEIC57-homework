class BeachesController < ApplicationController
    def index
        @beaches = Beach.all
    end

    def show
        @beach = Beach.find params[:id]
    end

    def new
    end

    def create
        beach = Beach.create :name => params[:name].capitalize, :suburb => params[:suburb].capitalize, :distance_from_sydney => params[:distance_from_sydney], :image => params[:image], :map_link => params[:map_link]
        redirect_to beach_path(beach.id)
    end

    def edit
        @beach = Beach.find params[:id]
    end

    def update
        beach = Beach.find params[:id]
        beach.name = params[:name].capitalize
        beach.suburb = params[:suburb].capitalize
        beach.distance_from_sydney = params[:distance_from_sydney]
        beach.image = params[:image]
        beach.map_link = params[:map_link]
        beach.save
        redirect_to beach_path(beach.id)
    end

    def destroy
        @beach = Beach.find params[:id]
        @beach.destroy
        redirect_to beaches_path
    end
end