Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/message' => 'magic#message'


  get '/secret' => 'secret#guess'
  get '/secret/reveal' => 'secret#reveal'


  get '/rock' => 'rock#choice'
  get '/rock/result' => 'rock#result'

end
