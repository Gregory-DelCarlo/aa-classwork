class SubsController < ApplicationController


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
        @sub = Sub.new
        render :edit
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
        @sub.destroy 
        render json: @sub
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description, :moderator_id)
    end
end

