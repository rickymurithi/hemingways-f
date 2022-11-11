class User < ActiveRecord::Base
    has_many :feedbacks
    has_many :bookings, through: :feedbacks

end