Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#home"

  get "/magic_8_ball" => "magic#game"
  get "/magic_8_ball/answer" => "magic#answer"
  get "/secret_number" => "secret#game"
  get "/secret_number/answer" => "secret#answer"
  get "/rock_paper_scissors" => "rock#game"
  get "/rock_paper_scissors/:throw" => "rock#answer"
end
