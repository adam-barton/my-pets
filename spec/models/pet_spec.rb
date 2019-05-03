require 'rails_helper'

RSpec.describe Pet, :type => :model do
  let(:pet) {
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
  }

  it "is valid with a name, breed, animal_type, and owner_id" do
    expect(pet).to be_valid
  end

  it "correctly updates a Pet" do
    user = User.create(name: "Max Charles", email: "test@test.com")
    pet = Pet.create(user_id: user.id, name: "A Pet", animal_type: "Elephant")
    pet.update(animal_type: "horse")
    expect(pet.animal_type).to eq("horse")
    expect(Pet.all.length).to eq(1)
  end

#   it "has many users through rides" do
#     max = User.create(name: "Max Charles", password: "password")
#     skai = User.create(name: "Skai Jackson", password: "password")
#     attraction.users << [max, skai]

#     expect(attraction.users.first).to eq(max)
#     expect(attraction.users.last).to eq(skai)
#   end

end