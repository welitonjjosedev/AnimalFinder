class ChangeAminalWorker
  include Sidekiq::Worker

  def perform(id)
    ChangeAminalWorker.perform_async(id)
  end
end
