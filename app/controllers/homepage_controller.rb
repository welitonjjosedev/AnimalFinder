class HomepageController < ApplicationController
  def index
    @pagy, @animals = pagy(Animal.all)
  end
end
