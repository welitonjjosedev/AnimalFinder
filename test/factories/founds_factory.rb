require 'faker'

FactoryBot.define do
  factory :found do
    name { Faker::Name.name }
    phone { Faker::PhoneNumber.cell_phone }
    content { Faker::Lorem.paragraph }
    animal
  end
end