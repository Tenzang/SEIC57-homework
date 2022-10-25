require "sinatra"
require "sinatra/reloader"
require "httparty"

require "pry"

get "/" do
    erb :home
end

get "/book_info" do
    book_name = params[:book_name]
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book_name}"
    info = HTTParty.get book_url

    if info["totalItems"] <= 0
        erb :not_found_book
    else
        book = info["items"][0]["volumeInfo"]

        @thumbnail = book["imageLinks"]["thumbnail"]
        @author = book["authors"].join(", ")
        @published_date = book["publishedDate"]
        @categories = book["categories"].join(", ")
        @average_rating = book["averageRating"]

        # @web_link = info["items"][0]["volumeInfo"]["saleInfo"].getBuyLink() || "no link for this book"
        # @description = info["items"][0]["volumeInfo"]["description"]

        erb :book_info
    end
end