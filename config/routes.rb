Rails.application.routes.draw do
  resources :reminders
  namespace :api do
    namespace :v1 do
      resources :pets
      resources :users

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
