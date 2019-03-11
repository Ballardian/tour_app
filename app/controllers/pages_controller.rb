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
  end

  def prices
  end

  def info
  end

  def contact
  end
end
