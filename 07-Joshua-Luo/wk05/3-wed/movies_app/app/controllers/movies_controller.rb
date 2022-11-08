class MoviesController < ApplicationController
    
    def index
        @movies = Movie.all
    end

    def show
        @movie = Movie.find params[:id]
    end    

    def new
        @movie = Movie.new
    end

    def create
        movie = Movie.create movies_params
        redirect_to movie
    end

    def edit
        @movie = Movie.find params[:id]
    end

    def update
        movie = Movie.find params[:id]
        movie.update movies_params
        redirect_to movie
    end
    
    def destroy
        movie = Movie.find params[:id]
        movie.destroy
        redirect_to movie        
    end






    private
    def movies_params
        params.require(:movie).permit(:name, :image, :date, :director_id)
    end
end