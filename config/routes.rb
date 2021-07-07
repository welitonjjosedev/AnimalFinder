Rails.application.routes.draw do


  scope :api, defaults: { format: :json } do
    resources :animals
    resources :founds
    get 'homepage', to: 'homepage#index'
    devise_for :owners,
               path: 'auth',
               controllers: { sessions: :sessions, registrations: :registrations },
               path_names: { sign_in: :login, registration: 'register' }
  end
end
