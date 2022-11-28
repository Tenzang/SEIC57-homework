class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token 
    #only need it for handwritten forms
    end