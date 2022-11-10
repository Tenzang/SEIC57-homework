Rails.application.routes.draw do
  root :to => "games#home"

  get "/magic_ball/question" => "magic_ball#question"
  get "/magic_ball/answer" => "magic_ball#answer"

  get "/secret_number/guess" => "secret_number#guess"
  get "/secret_number/answer" => "secret_number#answer"

  get "/rock_paper_scissors/choose" => "rock_paper_scissors#choose"
  get "/rock_paper_scissors/result" => "rock_paper_scissors#result"
end
