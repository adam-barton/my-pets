class RemindersController < ApplicationController
    require 'pry'
    def index
        reminders = reminder.all 
        render json: reminders
    end

    def show
        reminder = reminder.find_by(id: params[:id])
        render json: reminder
    end
    
    def new
        reminder = reminder.new
    end

    def create
        new_reminder = reminder.new(reminder_params)
        new_reminder.user_id = 1
        new_reminder.save
        render json: new_reminder
    end

    def update
        reminder = reminder.find_by(id: params[:id])
        reminder.update(reminder_params)
        reminder.save

        render json: reminder 
    end

    def destroy
        reminder = reminder.find_by(id: params[:id])
        reminder.destroy

        render json: reminder
    end

    private

    def reminder_params 
        params.require(:reminder).permit(:category, :pet_id, :notes)
    end
end
