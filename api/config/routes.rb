Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :sessions, only: [:create, :destroy]

    get 'sessions/current_user', to: 'sessions#get_current_user'
    resources :users, only: [:show]
  end
end
