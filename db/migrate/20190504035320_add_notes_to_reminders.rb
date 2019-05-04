class AddNotesToReminders < ActiveRecord::Migration[5.2]
  def change
    add_column :reminders, :notes, :string
  end
end
