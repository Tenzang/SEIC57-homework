class MountansController < ApplicationController
    
    def index
        @mountans = Mountan.all
    end

    def show
        @mountan = Mountan.find params[:id]
    end

    def new    
    end

    def create
        mountan = Mountan.new
        mountan.name = params[:name]
        mountan.image = params[:image]
        mountan.elevation = params[:elevation]
        mountan.prominence = params[:prominence]
        mountan.country = params[:country]
        mountan.save
        redirect_to mountan_path(mountan.id)
    end

    def edit
        @mountan = Mountan.find params[:id]
    end


end
