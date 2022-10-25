require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/cover' do
    @search_name = params[:search_name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @search_name }"
    info = HTTParty.get book_url
    @title = info['items'].first['volumeInfo']["title"]
    @authors = info['items'].first['volumeInfo']["authors"].join(', ')
    @cover_link = info['items'].first['volumeInfo']['imageLinks']['thumbnail']
    @total_results = info['totalItems']
    @description = info['items'].first['volumeInfo']["description"]
    erb :cover
end