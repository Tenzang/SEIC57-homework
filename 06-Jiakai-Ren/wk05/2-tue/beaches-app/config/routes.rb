Rails.application.routes.draw do
  root :to => 'beaches#index'

  get '/beaches' => 'beaches#index'
  get '/beaches/new' => 'beaches#new', :as => :new_beach
  post '/beaches' => 'beaches#create'
  get '/beaches/:id' => 'beaches#show', :as => :beach
  get '/beaches/:id/edit' => 'beaches#edit', :as => :edit_beach
  post '/beaches/:id' => 'beaches#update'
  get '/beaches/:id/destroy' => 'beaches#destroy', :as => :destroy_beach
end
