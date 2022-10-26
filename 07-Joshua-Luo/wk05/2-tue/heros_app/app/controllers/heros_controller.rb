class HerosController < ApplicationController
    
    def index
        @heros = Hero.all
    end
    def show
        @hero = Hero.find params[:id]
    end
    
    def new
    end

    def create
        hero = Hero.new
        hero.name = params[:name]
        hero.image = params[:image]
        hero.primarystat = params[:primarystat]
        hero.agility = params[:agility]
        hero.intelligence = params[:intelligence]
        hero.strength = params[:strength]
        hero.save
        redirect_to heros_path

    end

    def edit
        @hero = Hero.find params[:id]
    end

    def update
        hero = Hero.find params[:id]
        hero.name = params[:name]
        hero.image = params[:image]
        hero.primarystat = params[:primarystat]
        hero.agility = params[:agility]
        hero.intelligence = params[:intelligence]
        hero.strength = params[:strength]
        hero.save
        redirect_to hero_path(hero.id)
    end

    def destroy
        hero = Hero.find params[:id]
        hero.destroy
        hero.save
        redirect_to heros_path
    end
end