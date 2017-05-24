class V1::Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    user = User.find(params: id)
    user_updated = []

    if (user.name != user_params[:user][:name])
      user.update(name: user_params[:user][:name])
      user_updated << user_params[:user][:name]
    elsif (user.dob != user_params[:user][:dob])
      user.update(dob: user_params[:user][:dob])
      user_updated << user_params[:user][:dob]
    else
      render raw: `Something went wrong. User has not been UPDATED.`
    end

    render json: user_updated
  end

  def destroy
    user = User.find(params: id)
    user.destroy
    if (!User.find(params: id))
      render raw: `#{user.name} has been DELETED from the database.`
    else
      render raw: `Something went wrong. User has not been DELETED.`
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :dob)
  end
end
