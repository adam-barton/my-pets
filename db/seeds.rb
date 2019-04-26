# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  user = User.new(name: "Adam", email: "adam.barton333@gmail.com").save

  pet = Pet.new(name: "Beanie", animal_type: "Dog", breed: "Dachshund-mix", user_id: 1).save
  pet = Pet.new(name: "Marty McFly", animal_type: "House fly", breed: "Garden variety", user_id: 1).save
  