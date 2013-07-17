class Video < ActiveRecord::Base
  attr_accessible :image, :link, :title, :watched
  validates :link, :uniqueness => true, on: :create
end
