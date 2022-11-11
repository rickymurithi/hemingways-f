class Booking < ActiveRecord::Base
    has_many :feedbacks
    has_many :users, through: :feedbacks

end