require 'pry'
class Api::V1::RemindersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        reminders = Reminder.all 
        render json: reminders
    end

    def show
        reminder = Reminder.find_by(id: params[:id])
        render json: reminder
    end
    
    def new
        reminder = Reminder.new
    end

    def create
        new_reminder = Reminder.new(reminder_params)
        new_reminder.save
        render json: new_reminder
    end

    def update
        reminder = Reminder.find_by(id: params[:id])
        reminder.update(reminder_params)
        reminder.save

        render json: reminder 
    end

    def destroy
        reminder = Reminder.find_by(id: params[:id])
        reminder.destroy

        render json: reminder
    end

    private

    def reminder_params 
        params.require(:reminder).permit(:category, :pet_id, :notes, :date, :displayable_date, :displayable_time)
    end
end
