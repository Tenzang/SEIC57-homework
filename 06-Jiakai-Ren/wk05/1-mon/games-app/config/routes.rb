Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic8ball' => 'magic8ball#question'
  get '/magic8ball/answer' => 'magic8ball#answer'

  get '/secretnumber' => 'secretnumber#select'
  get '/secretnumber/play' => 'secretnumber#play'
  get '/secretnumber/result' => 'secretnumber#result'

  get '/rockpaperscissors' => 'rockpaperscissors#select'
  get '/rockpaperscissors/result' => 'rockpaperscissors#result'
end
