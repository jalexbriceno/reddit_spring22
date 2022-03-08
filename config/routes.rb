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
# resources :subs, only: [:index, :show, :update]
# resources :subs, except: [:create, :destroy]

# if you want add a route with a model of parent and child
# always go two level deep at most
# #   resources :parents do 
# #     resources :childs

# resources :parents except: [:index :show, :update, :create, :destroy]
end



end
