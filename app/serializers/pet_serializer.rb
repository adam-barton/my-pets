class PetSerializer < ActiveModel::Serializer

    has_many :ratings
    has_many :wines
  end