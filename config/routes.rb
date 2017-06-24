Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#gate'
  # Static Pages
  get 'static_pages/home'
  get 'static_pages/keyboard'
  get 'static_pages/help'
  
end
