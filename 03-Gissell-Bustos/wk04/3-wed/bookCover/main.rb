require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

response = HTTParty.get(https://www.googleapis.com/books/v1/volumes?q=title:Ulysses)

get '/' do
    erb: home
end

get 'cover' do

end