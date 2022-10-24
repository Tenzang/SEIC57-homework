require 'sinatra'
require'sinatra/reloader'
require 'httparty'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')
get '/' do
    erb :home
end 



get '/result' do 

    title= params[:book_title]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title } "
    info = HTTParty.get book_url 
    @cover = info['items'][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :result
end