class CreateFeedbacks < ActiveRecord::Migration[6.1]
  def change
    create_table :feedbacks do |t|
      t.string :rating
      t.string :comment
      t.string :name
      t.string :photo_url
      t.integer :booking_id
      t.integer :user_id
    end
  end
end
