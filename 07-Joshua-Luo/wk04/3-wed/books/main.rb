require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/info' do
    
    book_title= params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book_title}"
    @info = HTTParty.get book_url
    @img_src = @info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
    @title= @info["items"][1]["volumeInfo"]["title"]
    @authors = @info["items"][1]["volumeInfo"]["authors"][0]
    @description = @info["items"][1]["volumeInfo"]["description"]
    @categories = @info["items"][1]["volumeInfo"]["categories"][0]
    @publisher = @info["items"][1]["volumeInfo"]["publisher"]
    # require 'pry'
    # binding.pry
    erb :info
end

# title = 'Alice In Wonderland'
# book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
# info = HTTParty.get book_url

# info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]