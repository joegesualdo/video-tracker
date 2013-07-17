class VideosController < ApplicationController
  respond_to :json

  def index
    @videos = Video.all
    respond_with @videos
  end
end
