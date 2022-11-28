Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'yeezys#index'

  get '/yeezys' => 'yeezys#index'

  get '/yeezys/new' => 'yeezys#new', :as => :new_yeezy
  get '/yeezys/:id' => 'yeezys#show', :as=> :yeezy
  post '/yeezys' => 'yeezys#create'
  get '/yeezys/:id/edit' => 'yeezys#edit' , :as=> :edit_yeezy
  post '/yeezys/:id' => 'yeezys#update'
  get '/yeezys/:id/delete' => 'yeezys#destroy', :as => :delete_yeezy
 

end
