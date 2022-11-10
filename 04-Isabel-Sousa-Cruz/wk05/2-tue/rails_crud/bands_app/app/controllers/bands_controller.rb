require "httparty"
require "pry"

class BandsController < ApplicationController
    def home
    end

    def index
        @bands = Band.all
        raise "hell"
        @bands.each do |band|
            band_wiki_url = "https://en.wikipedia.org/api/rest_v1/page/summary/#{band.name.gsub(' ', '_')}"

        end
        wiki_response = HTTParty.get band_wiki_url
        if wiki_response 
            @band_image = wiki_response.dig("originalimage", "source")
            @band_genre = wiki_response.dig("description")
            @band_description = wiki_response.dig("extract")
            @band_wiki_url = wiki_response.dig("content_urls", "desktop", "page")
        end
    end

    def new
        if params[:already_exists]
            @already_exists = true
        end
    end

    def create
        already_exists = Band.where(name: params[:name]).first
        if already_exists
            redirect_to new_band_path(:already_exists => true)
        else
            band = Band.new
            band.name = params[:name]
            band.albums_number = params[:albums_number]
            band.top_song = params[:top_song]
            band.save
            redirect_to band_path(band.id)
        end
    end

    def show
        @band = Band.find params[:id]
        band_wiki_url = "https://en.wikipedia.org/api/rest_v1/page/summary/#{@band.name.gsub(' ', '_')}"
        wiki_response = HTTParty.get band_wiki_url
        if wiki_response 
            @band_image = wiki_response.dig("originalimage", "source")
            @band_genre = wiki_response.dig("description")
            @band_description = wiki_response.dig("extract")
            @band_wiki_url = wiki_response.dig("content_urls", "desktop", "page")
        end
    end

    def edit
        @band = Band.find params[:id]
    end

    def update
        band = Band.find params[:id]
        band.name = params[:name]
        band.image = params[:image]
        band.genre = params[:genre]
        band.albums_number = params[:albums_number]
        band.top_song = params[:top_song]
        band.save
        redirect_to band_path(band.id)
    end

    def delete
        band = Band.find params[:id]
        band.destroy
        redirect_to bands_path
    end
end