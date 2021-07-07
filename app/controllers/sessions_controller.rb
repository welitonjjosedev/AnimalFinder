class SessionsController < Devise::SessionsController
  def create
    owner = Owner.find_by_email(sign_in_params[:email])

    if owner && owner.valid_password?(sign_in_params[:password])
      @current_user = owner
    else
      render json: { errors: { 'email or password' => ['is invalid'] } }, status: :unprocessable_entity
    end
  end
end