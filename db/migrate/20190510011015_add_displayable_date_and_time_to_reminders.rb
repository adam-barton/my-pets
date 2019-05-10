class AddDisplayableDateAndTimeToReminders < ActiveRecord::Migration[5.2]
  def change
    add_column :reminders, :displayable_date, :string
    add_column :reminders, :displayable_time, :string
  end
end
