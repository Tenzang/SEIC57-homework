Rails.application.routes.draw do
get '/' => 'fizzy_drinks#home'
get '/fizzy_drinks' => "fizzy_drinks#index"
get '/fizzy_drinks/new' => 'fizzy_drinks#new'
get '/fizzy_drinks/:id' => 'fizzy_drinks#show', :as => :fizzy_drink
get '/fizzy_drinks/:id/edit' => 'fizzy_drinks#edit', :as => :edit_fizzy_drink
post '/fizzy_drinks' => 'fizzy_drinks#create'
post '/fizzy_drinks/:id' => 'fizzy_drinks#update'
get '/fizzy_drinks/:id/delete' => 'fizzy_drinks#delete',:as => :delete_fizzy_drink
end
