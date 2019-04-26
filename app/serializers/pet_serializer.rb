class PetSerializer < ActiveModel::Serializer
    attributes :id, :name, :breed, :animal_type, :owner_id
    belongs_to :user
  end