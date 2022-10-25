class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token  #only needed for hand written forms.
end
