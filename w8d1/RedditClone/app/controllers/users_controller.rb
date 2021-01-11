class UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end
    
    def new
        @user = User.new
        render :new
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user =  User.new(user_params)

        if user.save!
            sign_in(user)
            redirect_to user_url(user)
        else 
            flash.now[:errors] = user.errors.full_messages
            render :new
        end
    end

    def edit
        @user = User.new
        render :edit
    end

    def update
        @user = user.find(params[:id])

        if user.update(user_params)
            redirect_to user_url(user)
        else
            render :edit
        end
    end

    def destroy
        user = user.find(params[:id])
        user.destroy
        render json: user
    end

    private
    def user_params
        params.require(:user).only(:username, :password)
    end
end
