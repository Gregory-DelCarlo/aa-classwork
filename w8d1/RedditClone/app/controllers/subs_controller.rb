class SubsController < ApplicationController
    before_action :signed_in, only: [:edit, :update, :destroy]

    def index
        @subs = Sub.all
        render :index
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)

        if @sub.save!
            redirect_to sub_url(@sub)
        else 
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = Sub.find_by(title: params[:title])
        if current_user.id == @sub.moderator_id
            render :edit
        else
            flash[:errors] = "You must be a moderator to edit a sub"
            redirect_to sub_url(@sub)
        end
    end

    def update 
        @sub = Sub.find(params[:id])

        if @sub.update(sub_params)
            redirect_to sub_url(@sub)
        else
            render :edit
        end
    end

    def destroy
        @sub = Sub.find(params[:id])
        if current_user.id == @sub.moderator_id
            @sub.destroy
            render json: @sub
        else
            flash[:errors] = "You can't delete this sub because you are not the moderator"
            redirect_to sub_url(@sub)
        end
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description, :moderator_id)
    end
end

