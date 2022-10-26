Rails.application.routes.draw do
  root :to => 'airlines#index'
  resources :airlines
  resources :incidents
end
