Rails.application.routes.draw do

  #INDEX 
    get '/mountains' => 'mountains#index'
  #NEW
    get '/mountains/new' => 'mountains#new', :as => :new_mountain
  #SHOW
    get '/mountains/:id' => 'mountains#show', :as => :mountain

  #CREATE
    post 'mountains' => 'mountains#create'
  #EDIT
    get 'mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain

  #UPDATE
  post 'mountains/:id' => 'mountains#update'

  #DELETE
    get 'mountains/:id/delete' => 'mountains#delete', :as => :delete_mountain
end
