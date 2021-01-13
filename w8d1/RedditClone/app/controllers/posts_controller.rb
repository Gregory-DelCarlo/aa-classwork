class PostsController < ApplicationController
    
    def show
        @posts = Post.all 
        render :show 
    end

    def new
        @post = Post.new
        render :new
    end

    def create
        @post = Post.new(post_params)

        if post.save!
            redirect_to post_url(@post)
        else 
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit

    end

    private
    def post_params
        params.require(:post).permit(:title, :url, :sub_id, :author_id) 
    end
end
