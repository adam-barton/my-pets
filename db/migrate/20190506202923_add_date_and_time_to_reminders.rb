class AddDateAndTimeToReminders < ActiveRecord::Migration[5.2]
  def change
    add_column :reminders, :date, :string
    add_column :reminders, :time, :string
  end
end
