require 'rails_helper'

RSpec.describe Reminder, :type => :model do
    let(:reminder) {
        User.create(
            :name => "Jerk Face",
            :email => "test@test.com"
        )
      Pet.create(
        :name => "A Pet",
        :breed => "Mustang",
        :animal_type => "Horse",
        :user_id => 1,
      )
      Reminder.create(
          :category => "Meds",
          :pet_id => 1,
          :notes => "This is a note"
      )
    }
  
    it "is a valid Reminder with a category, pet, and notes" do
      expect(reminder).to be_valid
    end
  
    it "correctly updates a Reminder" do
      user = User.create(name: "Max Charles", email: "test@test.com")
      pet = Pet.create(user_id: user.id, name: "A Pet", animal_type: "Elephant")
      reminder = Reminder.create(pet_id: pet.id, category: "meds", notes: "What should I say here?")
      reminder.update(notes: "Changing my note")
      expect(reminder.notes).to eq("Changing my note")
      expect(Reminder.all.length).to eq(1)
    end

end
