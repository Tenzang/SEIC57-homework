Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => "heros#index"

  get '/heros' => "heros#index"

  get '/heros/new' => "heros#new", :as => :new

  get '/heros/:id' => "heros#show", :as => :hero

  post '/heros' => "heros#create"

  get '/heros/edit/:id' => "heros#edit", :as => :edit

  post '/heros/:id' => "heros#update"


  get '/heros/delete/:id' => "heros#destroy", :as => :delete

end

