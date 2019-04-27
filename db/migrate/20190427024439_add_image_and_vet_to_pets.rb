class AddImageAndVetToPets < ActiveRecord::Migration[5.2]
  def change
    add_column :pets, :image, :blob
    add_column :pets, :vet_name, :string
    add_column :pets, :vet_phone, :string
    add_column :pets, :medications, :string
  end
end
