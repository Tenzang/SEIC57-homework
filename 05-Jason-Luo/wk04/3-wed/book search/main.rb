require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
# ERB: Embedded Ruby: HTML with chunks of Ruby embedded in it.


get '/' do
    # "hello from the home page"
    erb :home # automatically searches views/
end

get '/info' do

    # @instance variable
    title = params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
    
    info = HTTParty.get book_url
    @title = info["items"][0]["volumeInfo"]["title"]
    @author = info["items"][0]["volumeInfo"]["authors"][0]
    @description = info["items"][0]["volumeInfo"]["description"]
    @image = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    require "pry"
    # binding.pry
    erb :info
end