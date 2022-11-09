Rails.application.routes.draw do
  root :to => "bands#home"
  get "/bands" => "bands#index"
  get "/bands/new" => "bands#new", :as => :new_band
  post "/bands" => "bands#create"
  get "/bands/:id" => "bands#show", :as => :band
  get "/bands/:id/edit" => "bands#edit", :as => :edit_band
  post "/bands/:id" => "bands#update"
  get "/bands/:id/delete" => "bands#delete", :as => :delete_band
end

# <ul>
# <li><%= link_to band.name, band_path(band.id) %></li>
# </ul>