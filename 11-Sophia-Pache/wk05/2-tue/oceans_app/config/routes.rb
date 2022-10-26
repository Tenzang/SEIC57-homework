Rails.application.routes.draw do
  root :to => 'oceans#index'

  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new', :as => :new_ocean
  get '/oceans/:id' => 'oceans#show', :as => :ocean
  post '/oceans' => 'oceans#create'
  get '/oceans/:id/edit' => 'oceans#edit', :as => :edit_ocean
  post '/oceans/:id' => 'oceans#update'
  get '/oceans/:id/delete' => 'oceans#destroy', :as => :delete_ocean
end
