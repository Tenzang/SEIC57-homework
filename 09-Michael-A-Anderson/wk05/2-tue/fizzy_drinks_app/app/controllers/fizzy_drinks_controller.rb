class FizzyDrinksController < ApplicationController
    def home
    end

    def index
        @drinks = FizzyDrink.all
    end

    def show
        @drink = FizzyDrink.find params[:id]
    end

    def edit
        @drink = FizzyDrink.find params[:id]
    end

    def new
    end

    def create
        drink = FizzyDrink.create :brand => params[:brand], :flavor => params[:flavor], :caffeine => params[:caffeine], :image => params[:image]
        redirect_to fizzy_drink_path(drink.id)
    end

    def update
        drink = FizzyDrink.find params[:id]
        drink.update :brand => params[:brand], :flavor => params[:flavor], :caffeine => params[:caffeine], :image => params[:image]
        redirect_to fizzy_drink_path(drink.id)
    end

    def delete
        drink = FizzyDrink.find params[:id]
        drink.destroy
        redirect_to fizzy_drinks_path
    end
end