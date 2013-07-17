require 'spec_helper'

describe Video do
  it "Should not allow duplicates" do
    @video1 = Video.create(link: "stevenzeller")
    @video2 = Video.create(link: "stevenzeller")
  
    Video.count.should == 1
  end
end
