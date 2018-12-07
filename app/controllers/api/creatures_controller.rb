class Api::CreaturesController < ApplicationController

    before_action :authenticate_user!

    def index
        @creatures = current_user.creatures 

        render json: @creatures 
    end 

    def show
        @creature = Creature.find(params[:id])

        render json: @creature 
    end

    def create 
        @creature = Creature.new(creature_params)

        @creature.save!

        render json: @creature

    end

    def update 
        

    end

    def destroy 

    end

    private

    def creature_params 
        params.require(:creature).permit(:name, :description, :img_url, :user_id)
    end

end
