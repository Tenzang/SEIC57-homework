require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home # automatically searches views folder
end

get '/result' do
    title = params[:name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    info = HTTParty.get book_url
    result_URL = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    result_name = info["items"][0]["volumeInfo"]["title"]
    result_author = info["items"][0]["volumeInfo"]["authors"][0]
    result_description = info["items"][0]["volumeInfo"]["description"]
    result_rating = info["items"][0]["volumeInfo"]["averageRating"]
    # require 'pry';binding.pry
    @result = "<img src='#{ result_URL }' height='300' width='200'>"
    @resultone = "#{ result_name }"
    @resulttwo = "#{ result_author }"
    @resultthree = "#{ result_description }"
    @resultfour = "Average rating is #{ result_rating.to_f }"
    erb :result
end

