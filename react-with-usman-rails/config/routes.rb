Rails.application.routes.draw do
  namespace :v1 do
    namespace :api do
      resources :users
    end
  end
end
