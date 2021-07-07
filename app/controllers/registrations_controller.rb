class RegistrationsController < Devise::RegistrationsController
  def create
    if params[:owner][:email].nil?
      render :status => 400,
             :json => {:message => 'User request must contain the user email.'}
      return
    elsif params[:owner][:password].nil?
      render :status => 400,
             :json => {:message => 'User request must contain the user password.'}
      return
    end

    if params[:owner][:email]
      duplicate_user = Owner.find_by_email(params[:owner][:email])
      unless duplicate_user.nil?
        render :status => 409,
               :json => {:message => 'Duplicate email. A user already exists with that email address.'}
        return
      end
    end

    @user = Owner.create(sign_up_params)

    if @user.save
      render :create
    else
      render :status => 400,
             :json => {:message => @user.errors.full_messages}
    end
  end

  private

  def sign_up_params
    params.require(:owner).permit(:email, :password, :city, :state, :phone, :name)
  end
end