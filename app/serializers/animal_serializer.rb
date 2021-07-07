class AnimalSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :photo, :name, :age, :extra, :status

  def photo
    if object.photo.attached?
      {
        url: rails_blob_url(object.photo)
      }
    end
  end
end
