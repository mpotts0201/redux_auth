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
        @creatures = current_user.creatures
        
        @creature = Creature.create(creature_params)
        puts '//////////////////////////////////////'
        puts @creature
        puts '//////////////////////////////////////'
        
        @creatures << @creature

        # @creatures.save

        render json: @creature

    end

    def update 
        @creature = Creature.find(params[:id])
        @creature.update(creature_params)

        @creature.save!

        render json: @creature
        

    end

    def destroy 
        @creature = Creature.find(params[:id])

        @creature.destroy

        render json: @creature
    end

    private

    def creature_params 
        params.require(:creature).permit(:name, :description, :img_url, :user_id)
    end

end
