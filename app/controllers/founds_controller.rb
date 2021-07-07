class FoundsController < ApplicationController
  acts_as_token_authentication_handler_for Owner, except: [:create]
  before_action :set_animal
  before_action :set_found, only: %i[ show update destroy ]

  def index
    @pagy, @founds = pagy(@animal.founds)
  end

  def show
  end

  def create
    @found = @animal.founds.new(found_params)

    if @found.save
      render :show, status: :created, location: founds_url
    else
      render json: @found.errors, status: :unprocessable_entity
    end
  end

  def update
    if @found.update(found_params)
      render :show, status: :ok, location: @found
    else
      render json: @found.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @found.destroy
  end

  private

  def set_found
    @found = @animal.founds.find(params[:id])
  end
  def set_animal
    @animal = Animal.find(params[:animal_id])
  end

  def found_params
    params.require(:found).permit(:name,:phone, :content, :animal_id)
  end
end
