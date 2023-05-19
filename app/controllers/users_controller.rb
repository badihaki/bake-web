class UsersController < ApplicationController

    def index
        render json: {message: 'connected to server'}, status: :ok
    end

end
