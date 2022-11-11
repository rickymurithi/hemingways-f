class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/feedbacks" do
    feedback = Feedback.all
    feedback.to_json
  end

  get "/bookings" do
    booking = Booking.all
    booking.to_json
  end

  get "/feedbacks/:id" do
    feedback = Feedback.find(params[:id])
    feedback.to_json
  end

  get "/bookings/:id" do
    booking = Booking.find(params[:id])
    booking.to_json
  end

  post "/feedbacks" do
    feedback = Feedback.create(rating: params[:rating], comment: params[:comment], name: params[:name], photo_url: params[:photo_url])
    feedback.to_json
  end

  post "/bookings" do
    booking = Booking.create(name: params[:name], email: params[:email], phone_number: params[:phone_number],suite: params[:suite])
    booking.to_json
  end

  patch "/feedbacks/:id" do
    booking =Booking.find(params[:id])
    booking.update(comment: params[:comment])
    booking.to_json
  end

  delete "/bookings/:id" do
    booking = Booking.find(params[:id])
    booking.destroy
    booking.to_json
  end

  delete "/feedbacks/:id" do
    feedback = Feedback.find(params[:id])
    feedback.destroy
    feedback.to_json
  end 


end
