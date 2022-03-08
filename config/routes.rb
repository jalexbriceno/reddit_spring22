Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/") only for rails view
  # root "articles#index"


# Api routes
# a way to link up to the controller
# react side to use

# backend as a api and also the controllers with
#htpp reques
#communicate in the browser
# have react communicate to the rails side using these routes
# #
namespace :api do
# http verb 'url path', to: 'controller#action', as: 
# get '/people', to: 'peope#index'



# this will create all of the routes for all base crud actions
resources :subs



end



end
