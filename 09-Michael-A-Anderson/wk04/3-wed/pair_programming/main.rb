require "sinatra"
require "sinatra/reloader"
require 'httparty'

$map = {
    "pass"=>{
        "erb"=>'yes_no',
        'text'=>'Does the test pass?',
        'yes'=>'/refactor',
        'no'=>'/write_code',
        'done'=>''
    },
    "write_test"=>{
        "erb"=>'done',
        'text'=>'Write a test',
        'yes'=>'',
        'no'=>'',
        'done'=>'/pass'
    },
    "refactor"=>{
        "erb"=>'yes_no',
        'text'=>'Need to refactor?',
        'yes'=>'/do_refactor',
        'no'=>'/new_feature',
        'done'=>''
    },
    "new_feature"=>{
        "erb"=>'done',
        'text'=>'Select a new feature to implement.',
        'yes'=>'',
        'no'=>'',
        'done'=>'/'
    },
    "write_code"=>{
        "erb"=>'done',
        'text'=>'Write just enough code for the test to pass. ',
        'yes'=>'',
        'no'=>'',
        'done'=>'/pass'
    },
    "do_refactor"=>{
        "erb"=>'done',
        'text'=>'Refactor the code.',
        'yes'=>'',
        'no'=>'',
        'done'=>'/pass'
    },
}

get '/' do 
    erb :home
end

get "/:key" do
    # require 'pry';binding.pry
    erb $map["#{params[:key].to_sym}"]['erb'].to_sym
end
