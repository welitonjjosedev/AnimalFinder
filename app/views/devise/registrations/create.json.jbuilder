json.owner do |json|
  json.partial! 'owners/owner', owner: @user
end