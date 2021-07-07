json.extract! animal, :id, :photo, :name, :age, :extra, :status, :created_at, :updated_at
json.url animal_url(animal, format: :json)
