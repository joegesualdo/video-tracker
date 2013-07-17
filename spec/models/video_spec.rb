require 'spec_helper'

describe Video do
  it "Should not allow duplicates" do
    @video1 = Video.create(link: "stevenzeller")
    @video2 = Video.create(link: "stevenzeller")
  
    Video.count.should == 1
  end

  it "Should update attributes" do
    @video = Video.create(link: "ThisIsLink")
    @video.update_attributes(link: "ThisIsUpdatedLink")

    @video.link.should == "ThisIsUpdatedLink"
  end
end
