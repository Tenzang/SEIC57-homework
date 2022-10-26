Rails.application.routes.draw do
  get "/" =>"pages#home"
  get '/magic_8_ball' =>"magic8ball#ask"
  get '/magic_8_ball/answer' => 'magic8ball#answer'
  get '/secret_number' =>"secret_number#guess"
  get '/secret_number/answer' =>"secret_number#answer"
end
