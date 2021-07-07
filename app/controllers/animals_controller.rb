class AnimalsController < ApplicationController
  acts_as_token_authentication_handler_for Owner
  before_action :set_animal, only: %i[ show update destroy ]

  # GET /animals
  # GET /animals.json
  def index
    @pagy, @animals = pagy(current_owner.animals.all)
  end

  # GET /animals/1
  # GET /animals/1.json
  def show
  end

  # POST /animals
  # POST /animals.json
  def create
    @animal = current_owner.animals.new(animal_params)

    if @animal.save
      render :show, status: :created, location: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /animals/1
  # PATCH/PUT /animals/1.json
  def update
    if @animal.update(animal_params)
      render :show, status: :ok, location: @animal
    else
      render json: @animal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /animals/1
  # DELETE /animals/1.json
  def destroy
    @animal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_animal
      @animal = current_owner.animals.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def animal_params
      params.require(:animal).permit(:photo, :name, :age, :extra, :status, :owner_id)
    end
end
