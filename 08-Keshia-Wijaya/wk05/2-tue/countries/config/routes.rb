Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/countries' => 'countries#index'
get '/countries/new' => 'countries#new', :as => :new_country
get '/countries/:id' => 'countries#show', :as => :country
end