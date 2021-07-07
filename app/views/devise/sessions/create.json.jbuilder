json.owner do |json|
  json.partial! 'owners/owner', owner: @current_user
end