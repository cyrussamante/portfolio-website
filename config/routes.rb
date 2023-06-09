Rails.application.routes.draw do
  root "main#home"
  get 'about' => "main#about", :as => :about
  get 'projects' => "main#projects", :as => :projects

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
