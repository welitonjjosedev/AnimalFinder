class Animal < ApplicationRecord
  belongs_to :owner
  has_many :founds
  has_one_attached :photo

  validates :name, :age, :extra, :status, presence: true
end
