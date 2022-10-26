Rails.application.routes.draw do
  root :to => 'games#home'

  get '/magicball' => 'games#magicball'
  get '/magicball/result' => 'magicball#result'

  get '/secretnumber' => 'games#secretnumber'
  get '/secretnumber/result' => 'secretnumber#result'

  get '/rockpaperscissors' => 'games#rockpaperscissors'
  get '/rockpaperscissors/result' => 'rockpaperscissors#result'
end
