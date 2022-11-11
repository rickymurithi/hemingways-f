class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.string :Name
      t.string :email
      t.string :phone_number
      t.string :suite 
    end
  end
end
