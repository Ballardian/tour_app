Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/gallery', to: 'pages#gallery'
  get '/tours', to: 'pages#tours'
  get '/itinerary', to: 'pages#itinerary'
  get '/prices', to: 'pages#prices'
  get '/info', to: 'pages#info'
  get '/contact', to: 'pages#contact'
end
