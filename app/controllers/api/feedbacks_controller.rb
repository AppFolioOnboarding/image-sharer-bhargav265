module Api
  class FeedbacksController < ApplicationController
    def create
      render json: { message: 'good' }, status: :ok
    end
  end
end
