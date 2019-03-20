class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only:
  [:home, :gallery, :tours, :itinerary, :prices, :info, :contact]

  def home
  end

  def gallery
  end

  def tours
  end

  def itinerary
    # pin_markers
  end

  def prices
  end

  def info
  end

  def contact
  end

  private

  def pin_markers
    @markers = [
      {lng: 77.21, lat: 28.64},
      {lng: 74.87, lat: 31.63},
      {lng: 76.50, lat: 30.83},
      {lng: 78.26, lat: 30.08}
    ]
  end
end
