module Api
  class SessionsController < ApplicationController

    def create
      user_hash = User.authenticate(params[:email], params[:password])
      if user_hash
        created_jwt = Core::JsonWebToken.encode(user_hash)
        cookies.signed[:jwt] = {
          value: created_jwt,
          httponly: true,
          expires: 1.hour.from_now
        }
        render json: user_hash
      else
        render status: 404,
               json: {error: 'Username or password incorrect'}
      end
    end

    def destroy
      cookies.delete(:jwt)
      render json: {success: true}
    end
  end
end
