require "pry"
class Reminder < ApplicationRecord
    belongs_to :pet
end
