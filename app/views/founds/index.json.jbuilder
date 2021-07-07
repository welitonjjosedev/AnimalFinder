json.data do
  json.array! @founds, partial:  "founds/found", as: :found
end
json.pagy @pagy