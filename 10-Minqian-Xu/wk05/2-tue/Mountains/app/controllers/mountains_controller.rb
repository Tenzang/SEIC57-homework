class MountainssController < ApplicationController
    def index
        @mountains = Mountains.all
    end

    def show
        @mountains = Mountains.find params[:id]
    end

    def new
    end

    def create
        # TODO: rewrite this as a single Mountains.create
        mountains = Mountains.new
        mountains.name = params[:name]
        mountains.image = params[:image]
        mountains.height = params[:height]
        mountains.country = params[:country]
        mountains.save
        redirect_to Mountains_path(mountains.id)
    end

    def edit
        @mountains = Mountains.find params[:id]
    end

    def update
        mountains = Mountains.find params[:id]
        mountains.name = params[:name]
        mountains.image = params[:image]
        mountains.height = params[:height]
        mountains.country = params[:country]
        mountains.save
        redirect_to Mountains_path(mountains.id)
    end

    def destroy
        mountains = Mountains.find params[:id]
        mountains.destroy
        redirect_to Mountainss_path
    end
end
Footer
