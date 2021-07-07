require 'faker'

FactoryBot.define do
  factory :animal do
    name { Faker::Name.name }
    age { Faker::Number.between(from: 18, to: 65) }
    extra { Faker::Lorem.paragraph }
    status { ["Perdido", "Comunicado", "Encontrado"].sample }
    owner
  end
end