Rails.application.routes.draw do
  root :to => 'mountans#index'

  get '/mountans' => 'mountans#index'
  get '/mountans/new' => 'mountans#new', :as => :new_mountan
  get '/mountans/:id' => 'mountans#show', :as => :mountan
  post '/mountans' => 'mountans#create'
  get '/mountans/:id/edit' => 'mountans#edit', :as => :edit_mountan

end


# root :to => 'planets#index'

# get '/planets' => 'planets#index'
# get '/planets/new' => 'planets#new', :as => :new_planet
# get '/planets/:id' => 'planets#show', :as => :planet
# post '/planets' => 'planets#create'
# get '/planets/:id/edit' => 'planets#edit', :as => :edit_planet
# post '/planets/:id' => 'planets#update'
# get '/planets/:id/delete' => 'planets#destroy', :as => :delete_planet