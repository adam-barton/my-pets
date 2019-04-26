class Api::V1::PetsController < ApplicationController
   require 'pry'
    def index
        @pets = Pet.all 
        render json: @pets
    end

    def show
        @pet = Pet.find_by(id: params[:id])
        render json: @pet
    end
    
    def new
        @pet = Pet.new
    end

    def create
        binding.pry
        new_pet = Pet.new(pet_params)
        new_pet.owner_id = 1
        new_pet.save

    render json: new_pet
    end

    private

    def pet_params 
        params.require(pet).permit(:name, :breed, :animal_type)
    end
end
