Rails.application.routes.draw do
 root :to => 'pages#home'

 get '/magic' => 'magic#form'
 get '/magic/info' => 'magic#info'

end
