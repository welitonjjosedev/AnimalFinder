json.data do
  json.array! @animals, partial: "animals/animal", as: :animal
end
json.pagy @pagy
