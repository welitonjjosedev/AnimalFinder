class Found < ApplicationRecord
  belongs_to :animal

  after_create :change_animal
  validates :name, :phone, :content,  presence: true


  def change_animal
    animal = Animal.find(self.animal_id)
    animal.status = "Comunicado"
    animal.save
    #ChangeAminalWorker.perform_async(self.animal_id)
  end
end
