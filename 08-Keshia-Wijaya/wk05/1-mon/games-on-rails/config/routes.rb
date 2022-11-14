Rails.application.routes.draw do
  get '/games' => 'games#games'
  get '/magic8' => 'games#magic8'
  get '/secretnumber' => 'games#secret_number'
  get '/rockpaperscissors' => 'games#rock_paper_scissors'

end


# Games on Rails is a web application with three games

# Magic 8 Ball
# Secret Number
# Rock Paper Scissors
# Magic 8 Ball

# Magic 8 ball takes user's questions from the the URL as params and returns a positive or negative answer.
# Secret Number

# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
# Rock Paper Scissors

# Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
# Use params[:throw] as a user's choice
# Compare the 2! If users throw matches the apps throw, the user wins.
# i.e. If a user throws rock http://localhost:3000/games/rock_paper_scissors/rock and the server 
# picks rock player wins! (Yes, I know that is not how RPS works) Bonus: Set the win or lose condition 
# based on the real rules of Rock Paper Scissors.