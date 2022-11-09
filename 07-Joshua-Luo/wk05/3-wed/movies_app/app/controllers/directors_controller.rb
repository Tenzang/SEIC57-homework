class DirectorsController < ApplicationController
    
    def index
        @directors = Director.all
    end

    def show
        @director = Director.find params[:id]
    end

    def new
        @director = Director.new
    end

    def create
        director = Director.create directors_params
        redirect_to director
    end

    def edit
        @director = Director.find params[:id]
    end

    def update
        director = Director.find params[:id]
        director.update directors_params
        redirect_to director
    end

    def destroy
        director = Director.find params[:id]
        director.destroy
        redirect_to director
    end




    private
    def directors_params
        params.require(:director).permit(:name, :image)
    end
end