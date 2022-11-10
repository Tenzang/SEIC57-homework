class BreweriesController < ApplicationController
    def home
    end
    def index
        @breweries = Brewery.all
    end
    def show
        @brewery = Brewery.find params[:id]
    end
    def new
        @brewery= Brewery.new
    end
    def create
        brewery = Brewery.create brewery_params
        redirect_to brewery
    end

    def edit
        @brewery = Brewery.find params[:id]
    end
    def update
        brewery = Brewery.find params[:id]
        brewery.update brewery_params
        redirect_to brewery
    end
    def destroy
        brewery = Brewery.find params[:id]
        brewery.destroy
        redirect_to breweries_path
    end

    private 
    def brewery_params
        params.require(:brewery).permit(:name, :country, :est_year, :logo)
    end
end
