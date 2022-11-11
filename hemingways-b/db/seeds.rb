puts "🌱 Seeding spices..."

puts "Deleting old data..."
Feedback.destroy_all
User.destroy_all
Booking.destroy_all

# Seed your database here
#make 10 users
puts "Creating users..."
user1 = User.create(name: Faker::Name.name)
user2 = User.create(name: Faker::Name.name)
user3 = User.create(name: Faker::Name.name)
user4 = User.create(name: Faker::Name.name)
user5 = User.create(name: Faker::Name.name)

#make 5 Bookings
puts "Creating Bookings..."
booking1 = Booking.create(Name: Faker::Name.name, email: "google@google", phone_number: 725673932, suite:"Laxury")
booking2 = Booking.create(Name: Faker::Name.name, email: "me@google", phone_number: 757939784, suite:"Economy")
booking3 = Booking.create(Name: Faker::Name.name, email: "you@google", phone_number: 7848648968, suite:"Laxury")
booking4 = Booking.create(Name: Faker::Name.name, email: "us@google", phone_number: 7277277275, suite:"Business")
booking5 = Booking.create(Name: Faker::Name.name, email: "them@google", phone_number: 7753183676, suite:"Business")

puts "Creating feedbacks..."
feedbacks1 = Feedback.create(rating: "3", comment: "Avarage", name: Faker::Name.name, photo_url: "https://i.pinimg.com/236x/87/42/31/8742315158e5de302ae9c5a2f9bee233.jpg", booking_id: booking3.id, user_id: user2.id)
feedbacks2 = Feedback.create(rating: "5", comment: "Very good", name: Faker::Name.name, photo_url: "https://i.pinimg.com/236x/87/42/31/8742315158e5de302ae9c5a2f9bee233.jpg", booking_id: booking1.id, user_id: user1.id)
feedbacks3 = Feedback.create(rating: "3", comment: "Avarage", name: Faker::Name.name, photo_url: "https://i.pinimg.com/236x/87/42/31/8742315158e5de302ae9c5a2f9bee233.jpg", booking_id: booking1.id, user_id: user1.id)
feedbacks4 = Feedback.create(rating: "4", comment: "Good", name: Faker::Name.name, photo_url: "https://i.pinimg.com/236x/87/42/31/8742315158e5de302ae9c5a2f9bee233.jpg", booking_id: booking2.id, user_id: user4.id)
feedbacks5 = Feedback.create(rating: "5", comment: "Very good", name: Faker::Name.name, photo_url: "https://i.pinimg.com/236x/87/42/31/8742315158e5de302ae9c5a2f9bee233.jpg", booking_id: booking5.id, user_id: user3.id)

puts "✅ Done seeding!"
