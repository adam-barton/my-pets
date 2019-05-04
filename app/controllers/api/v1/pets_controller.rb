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
        new_pet = Pet.new(pet_params)
        new_pet.user_id = 1
        new_pet.save
        render json: new_pet
    end

    def update
        pet = Pet.find_by(id: params[:id])
        pet.update(pet_params)
        pet.save

        render json: pet 
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        pet.destroy

        render json: pet
    end

    private

    def pet_params 
        params.require(:pet).permit(:name, :breed, :animal_type, :medications, :vet_name, :vet_phone, :image)
    end
end
