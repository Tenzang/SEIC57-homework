class WhiskeysController < ApplicationController
    def index
        @whiskeys = Whiskey.all
    end
    def show
        @whiskey = Whiskey.find params[:id]
    end
    def new
        @whiskey = Whiskey.new
    end
    def create
        whiskey = Whiskey.create whiskey_params
        redirect_to whiskey
    end
    def edit
        @whiskey = Whiskey.find params[:id]
    end
    def update
        @whiskey = Whiskey.find params[:id]
        @whiskey.update whiskey_params
        redirect_to @whiskey
    end
    def destroy
        whiskey = Whiskey.find params[:id]
        whiskey.destroy
        redirect_to whiskeys_path
    end

    private
    def whiskey_params
        params.require(:whiskey).permit(:name, :alcohol_content, :aged, :brewery_id)
    end
end