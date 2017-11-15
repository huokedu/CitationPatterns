Rails.application.routes.draw do
  get 'statistics/show'

  get '/query', to: 'query_controller#query'

  resources :authors
  resources :papers
end
