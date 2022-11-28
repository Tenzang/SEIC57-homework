Rails.application.routes.draw do
  root :to => "breweries#home"
  resources :breweries
  resources :whiskeys
end
