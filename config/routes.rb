Rails.application.routes.draw do

  namespace :api do
    resources :users do
      resources :trips
    end

    resources :trips, except: [:index, :show, :create, :update, :destroy] do
      resources :locations
    end
  end
end
