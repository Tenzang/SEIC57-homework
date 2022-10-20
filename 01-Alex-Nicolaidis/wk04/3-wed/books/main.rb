require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pry"


get '/' do
    erb :home
end

get '/cover' do
    @book_title = params[:book]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}."
    book_info = HTTParty.get book_url
    @title_found = book_info["items"][0]["volumeInfo"]["title"]
    @thumbnail = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :cover
end

