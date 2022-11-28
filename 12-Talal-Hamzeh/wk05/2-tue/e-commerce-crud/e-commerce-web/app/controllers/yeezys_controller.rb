class YeezysController < ApplicationController
    def index
        @yeezys = Yeezy.all
    end

    def show
        @yeezy = Yeezy.find params[:id]
    end

    def new 
    end
   
    def create 
        yeezy = Yeezy.new 
        yeezy.name = params[:name]
        yeezy.image = params[:image]
        yeezy.size = params[:size]
        yeezy.availability = params[:availability]
        yeezy.description = params[:description]
        yeezy.save
        redirect_to yeezy_path(yeezy.id)
    end 

    def edit 
        @yeezy = Yeezy.find params[:id]
    end

    def update 
        yeezy = Yeezy.find params[:id]
        yeezy.name = params[:name]
        yeezy.image = params[:image]
        yeezy.size = params[:size]
        yeezy.availability = params[:availability]
        yeezy.description = params[:description]
        yeezy.save
        redirect_to yeezy_path(yeezy.id)

    end 
    def destroy 
        yeezy = Yeezy.find params[:id]
        yeezy.destroy
        redirect_to yeezys_path

    end  


end
