require "sinatra"
require "sinatra/reloader"
require "httparty"
# require "stock_quote"
# StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

# ERB : Embedded Ruby: HTML with chunks of Ruby embedded

get "/" do
    erb :home #it automatically seraches the view folder
end

get "/cover" do
# we want to get the user input and make the call 

    title = params[:title]
    book_url="https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    
    @cover = HTTParty.get book_url; 
    # this code calls json data from the url mentioned
    

    erb :cover
end
