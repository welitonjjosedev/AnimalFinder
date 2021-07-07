require 'faker'

FactoryBot.define do
  factory :owner do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { "12345678" }
    phone { Faker::PhoneNumber.cell_phone }
    city { Faker::Address.city }
    state { Faker::Address.community }
  end
end